import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PodcastMinimum } from "./podcastminimum";

export enum SubmitPodcastResponseStatusEnum {
    Found = "found"
,    InReview = "in review"
}


export class SubmitPodcastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=podcast" })
  podcast: PodcastMinimum;

  @Metadata({ data: "json, name=status" })
  status: SubmitPodcastResponseStatusEnum;
}

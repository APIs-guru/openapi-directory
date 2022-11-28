import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";


export enum SubmitPodcastResponseStatusEnum {
    Found = "found",
    InReview = "in review"
}


export class SubmitPodcastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=podcast" })
  podcast: PodcastMinimum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: SubmitPodcastResponseStatusEnum;
}

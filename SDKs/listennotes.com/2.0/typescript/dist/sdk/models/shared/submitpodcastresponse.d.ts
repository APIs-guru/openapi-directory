import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
export declare enum SubmitPodcastResponseStatusEnum {
    Found = "found",
    InReview = "in review"
}
export declare class SubmitPodcastResponse extends SpeakeasyBase {
    podcast: PodcastMinimum;
    status: SubmitPodcastResponseStatusEnum;
}

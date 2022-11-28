import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeletePodcastResponseStatusEnum {
    Deleted = "deleted",
    InReview = "in review"
}
export declare class DeletePodcastResponse extends SpeakeasyBase {
    status: DeletePodcastResponseStatusEnum;
}

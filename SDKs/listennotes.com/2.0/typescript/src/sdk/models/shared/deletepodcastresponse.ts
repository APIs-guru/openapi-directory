import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeletePodcastResponseStatusEnum {
    Deleted = "deleted",
    InReview = "in review"
}


export class DeletePodcastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: DeletePodcastResponseStatusEnum;
}

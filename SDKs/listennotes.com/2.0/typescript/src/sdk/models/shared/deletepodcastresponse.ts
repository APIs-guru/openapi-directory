import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeletePodcastResponseStatusEnum {
    Deleted = "deleted"
,    InReview = "in review"
}


export class DeletePodcastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: DeletePodcastResponseStatusEnum;
}

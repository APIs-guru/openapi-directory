import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleSearchIdeahubV1betaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PostDrafted = "POST_DRAFTED",
    PostPublished = "POST_PUBLISHED",
    PostDeleted = "POST_DELETED",
    PostUnpublished = "POST_UNPUBLISHED"
}


// GoogleSearchIdeahubV1betaIdeaActivity
/** 
 * An idea activity entry.
**/
export class GoogleSearchIdeahubV1betaIdeaActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ideas" })
  ideas?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}

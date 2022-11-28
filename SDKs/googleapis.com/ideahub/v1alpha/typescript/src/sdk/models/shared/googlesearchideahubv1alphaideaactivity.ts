import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PostDrafted = "POST_DRAFTED",
    PostPublished = "POST_PUBLISHED",
    PostDeleted = "POST_DELETED",
    PostUnpublished = "POST_UNPUBLISHED"
}


// GoogleSearchIdeahubV1alphaIdeaActivity
/** 
 * An idea activity entry.
**/
export class GoogleSearchIdeahubV1alphaIdeaActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ideas" })
  ideas?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}

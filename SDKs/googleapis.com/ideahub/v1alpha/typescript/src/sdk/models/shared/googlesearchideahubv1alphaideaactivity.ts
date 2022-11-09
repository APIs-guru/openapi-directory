import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    PostDrafted = "POST_DRAFTED"
,    PostPublished = "POST_PUBLISHED"
,    PostDeleted = "POST_DELETED"
,    PostUnpublished = "POST_UNPUBLISHED"
}


// GoogleSearchIdeahubV1alphaIdeaActivity
/** 
 * An idea activity entry.
**/
export class GoogleSearchIdeahubV1alphaIdeaActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ideas" })
  ideas?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=type" })
  type?: GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}

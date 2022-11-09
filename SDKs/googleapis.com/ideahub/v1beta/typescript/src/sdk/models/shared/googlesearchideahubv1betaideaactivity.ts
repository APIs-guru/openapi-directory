import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleSearchIdeahubV1betaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    PostDrafted = "POST_DRAFTED"
,    PostPublished = "POST_PUBLISHED"
,    PostDeleted = "POST_DELETED"
,    PostUnpublished = "POST_UNPUBLISHED"
}


// GoogleSearchIdeahubV1betaIdeaActivity
/** 
 * An idea activity entry.
**/
export class GoogleSearchIdeahubV1betaIdeaActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ideas" })
  ideas?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=type" })
  type?: GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}

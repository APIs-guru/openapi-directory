import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PostDrafted = "POST_DRAFTED",
    PostPublished = "POST_PUBLISHED",
    PostDeleted = "POST_DELETED",
    PostUnpublished = "POST_UNPUBLISHED"
}
/**
 * An idea activity entry.
**/
export declare class GoogleSearchIdeahubV1alphaIdeaActivity extends SpeakeasyBase {
    ideas?: string[];
    name?: string;
    topics?: string[];
    type?: GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;
    uri?: string;
}

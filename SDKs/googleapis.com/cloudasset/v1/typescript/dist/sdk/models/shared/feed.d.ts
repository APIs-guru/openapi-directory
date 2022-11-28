import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { FeedOutputConfig } from "./feedoutputconfig";
export declare enum FeedContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    OsInventory = "OS_INVENTORY",
    Relationship = "RELATIONSHIP"
}
/**
 * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
**/
export declare class Feed extends SpeakeasyBase {
    assetNames?: string[];
    assetTypes?: string[];
    condition?: Expr;
    contentType?: FeedContentTypeEnum;
    feedOutputConfig?: FeedOutputConfig;
    name?: string;
    relationshipTypes?: string[];
}

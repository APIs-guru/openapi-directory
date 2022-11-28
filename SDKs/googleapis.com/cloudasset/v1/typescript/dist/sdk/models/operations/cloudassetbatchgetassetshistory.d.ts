import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetBatchGetAssetsHistoryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudassetBatchGetAssetsHistoryContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    OsInventory = "OS_INVENTORY",
    Relationship = "RELATIONSHIP"
}
export declare class CloudassetBatchGetAssetsHistoryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assetNames?: string[];
    callback?: string;
    contentType?: CloudassetBatchGetAssetsHistoryContentTypeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTimeWindowEndTime?: string;
    readTimeWindowStartTime?: string;
    relationshipTypes?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetBatchGetAssetsHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetBatchGetAssetsHistoryRequest extends SpeakeasyBase {
    pathParams: CloudassetBatchGetAssetsHistoryPathParams;
    queryParams: CloudassetBatchGetAssetsHistoryQueryParams;
    security: CloudassetBatchGetAssetsHistorySecurity;
}
export declare class CloudassetBatchGetAssetsHistoryResponse extends SpeakeasyBase {
    batchGetAssetsHistoryResponse?: shared.BatchGetAssetsHistoryResponse;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetProjectsBatchGetAssetsHistoryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY"
}
export declare class CloudassetProjectsBatchGetAssetsHistoryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assetNames?: string[];
    callback?: string;
    contentType?: CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTimeWindowEndTime?: string;
    readTimeWindowStartTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetProjectsBatchGetAssetsHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetProjectsBatchGetAssetsHistoryRequest extends SpeakeasyBase {
    pathParams: CloudassetProjectsBatchGetAssetsHistoryPathParams;
    queryParams: CloudassetProjectsBatchGetAssetsHistoryQueryParams;
    security: CloudassetProjectsBatchGetAssetsHistorySecurity;
}
export declare class CloudassetProjectsBatchGetAssetsHistoryResponse extends SpeakeasyBase {
    batchGetAssetsHistoryResponse?: shared.BatchGetAssetsHistoryResponse;
    contentType: string;
    statusCode: number;
}

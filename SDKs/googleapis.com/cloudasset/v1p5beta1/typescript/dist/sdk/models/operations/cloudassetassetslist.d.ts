import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAssetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudassetAssetsListContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY"
}
export declare class CloudassetAssetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assetTypes?: string[];
    callback?: string;
    contentType?: CloudassetAssetsListContentTypeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetAssetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAssetsListRequest extends SpeakeasyBase {
    pathParams: CloudassetAssetsListPathParams;
    queryParams: CloudassetAssetsListQueryParams;
    security: CloudassetAssetsListSecurity;
}
export declare class CloudassetAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssetsResponse?: shared.ListAssetsResponse;
    statusCode: number;
}

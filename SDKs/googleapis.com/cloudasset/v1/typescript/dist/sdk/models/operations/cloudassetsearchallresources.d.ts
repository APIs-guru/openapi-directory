import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSearchAllResourcesPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetSearchAllResourcesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assetTypes?: string[];
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetSearchAllResourcesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSearchAllResourcesRequest extends SpeakeasyBase {
    pathParams: CloudassetSearchAllResourcesPathParams;
    queryParams: CloudassetSearchAllResourcesQueryParams;
    security: CloudassetSearchAllResourcesSecurity;
}
export declare class CloudassetSearchAllResourcesResponse extends SpeakeasyBase {
    contentType: string;
    searchAllResourcesResponse?: shared.SearchAllResourcesResponse;
    statusCode: number;
}

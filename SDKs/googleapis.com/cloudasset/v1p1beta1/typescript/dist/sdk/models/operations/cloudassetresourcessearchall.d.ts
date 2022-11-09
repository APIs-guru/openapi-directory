import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudassetResourcesSearchAllPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetResourcesSearchAllQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetResourcesSearchAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetResourcesSearchAllRequest extends SpeakeasyBase {
    pathParams: CloudassetResourcesSearchAllPathParams;
    queryParams: CloudassetResourcesSearchAllQueryParams;
    security: CloudassetResourcesSearchAllSecurity;
}
export declare class CloudassetResourcesSearchAllResponse extends SpeakeasyBase {
    contentType: string;
    searchAllResourcesResponse?: shared.SearchAllResourcesResponse;
    statusCode: number;
}

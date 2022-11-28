import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsAssetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsAssetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    compareDuration?: string;
    fieldMask?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsAssetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsAssetsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsAssetsListPathParams;
    queryParams: SecuritycenterProjectsAssetsListQueryParams;
    security: SecuritycenterProjectsAssetsListSecurity;
}
export declare class SecuritycenterProjectsAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssetsResponse?: shared.ListAssetsResponse;
    statusCode: number;
}

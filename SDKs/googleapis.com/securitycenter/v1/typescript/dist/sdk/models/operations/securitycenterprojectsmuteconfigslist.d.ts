import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsMuteConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsMuteConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsMuteConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsMuteConfigsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsMuteConfigsListPathParams;
    queryParams: SecuritycenterProjectsMuteConfigsListQueryParams;
    security: SecuritycenterProjectsMuteConfigsListSecurity;
}
export declare class SecuritycenterProjectsMuteConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listMuteConfigsResponse?: shared.ListMuteConfigsResponse;
    statusCode: number;
}

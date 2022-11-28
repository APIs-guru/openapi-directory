import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsListSecurityOption1;
    option2?: TranslateProjectsLocationsListSecurityOption2;
}
export declare class TranslateProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsListPathParams;
    queryParams: TranslateProjectsLocationsListQueryParams;
    security: TranslateProjectsLocationsListSecurity;
}
export declare class TranslateProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}

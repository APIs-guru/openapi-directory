import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGlossariesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsGlossariesListQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsGlossariesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesListSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGlossariesListSecurityOption1;
    option2?: TranslateProjectsLocationsGlossariesListSecurityOption2;
}
export declare class TranslateProjectsLocationsGlossariesListRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGlossariesListPathParams;
    queryParams: TranslateProjectsLocationsGlossariesListQueryParams;
    security: TranslateProjectsLocationsGlossariesListSecurity;
}
export declare class TranslateProjectsLocationsGlossariesListResponse extends SpeakeasyBase {
    contentType: string;
    listGlossariesResponse?: shared.ListGlossariesResponse;
    statusCode: number;
}

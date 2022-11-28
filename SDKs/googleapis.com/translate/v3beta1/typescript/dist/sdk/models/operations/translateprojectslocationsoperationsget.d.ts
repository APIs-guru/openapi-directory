import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsOperationsGetSecurityOption1;
    option2?: TranslateProjectsLocationsOperationsGetSecurityOption2;
}
export declare class TranslateProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsOperationsGetPathParams;
    queryParams: TranslateProjectsLocationsOperationsGetQueryParams;
    security: TranslateProjectsLocationsOperationsGetSecurity;
}
export declare class TranslateProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

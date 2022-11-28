import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsOperationsDeleteSecurityOption1;
    option2?: TranslateProjectsLocationsOperationsDeleteSecurityOption2;
}
export declare class TranslateProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsOperationsDeletePathParams;
    queryParams: TranslateProjectsLocationsOperationsDeleteQueryParams;
    security: TranslateProjectsLocationsOperationsDeleteSecurity;
}
export declare class TranslateProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

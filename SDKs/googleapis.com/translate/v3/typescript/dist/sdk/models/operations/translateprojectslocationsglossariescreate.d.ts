import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGlossariesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsGlossariesCreateQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsGlossariesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesCreateRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGlossariesCreatePathParams;
    queryParams: TranslateProjectsLocationsGlossariesCreateQueryParams;
    request?: shared.GlossaryInput;
    security: TranslateProjectsLocationsGlossariesCreateSecurity;
}
export declare class TranslateProjectsLocationsGlossariesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

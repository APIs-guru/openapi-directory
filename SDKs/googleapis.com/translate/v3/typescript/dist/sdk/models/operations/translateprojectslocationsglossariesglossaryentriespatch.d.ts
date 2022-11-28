import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1;
    option2?: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams;
    queryParams: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams;
    request?: shared.GlossaryEntry;
    security: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse extends SpeakeasyBase {
    contentType: string;
    glossaryEntry?: shared.GlossaryEntry;
    statusCode: number;
}

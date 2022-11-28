import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1;
    option2?: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams;
    queryParams: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams;
    request?: shared.GlossaryEntry;
    security: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    glossaryEntry?: shared.GlossaryEntry;
    statusCode: number;
}

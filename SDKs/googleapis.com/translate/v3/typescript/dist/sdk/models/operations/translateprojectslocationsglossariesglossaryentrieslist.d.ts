import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1;
    option2?: TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGlossariesGlossaryEntriesListPathParams;
    queryParams: TranslateProjectsLocationsGlossariesGlossaryEntriesListQueryParams;
    security: TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse extends SpeakeasyBase {
    contentType: string;
    listGlossaryEntriesResponse?: shared.ListGlossaryEntriesResponse;
    statusCode: number;
}

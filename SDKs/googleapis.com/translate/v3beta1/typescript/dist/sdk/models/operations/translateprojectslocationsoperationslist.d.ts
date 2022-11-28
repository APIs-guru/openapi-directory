import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsOperationsListSecurityOption1;
    option2?: TranslateProjectsLocationsOperationsListSecurityOption2;
}
export declare class TranslateProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsOperationsListPathParams;
    queryParams: TranslateProjectsLocationsOperationsListQueryParams;
    security: TranslateProjectsLocationsOperationsListSecurity;
}
export declare class TranslateProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}

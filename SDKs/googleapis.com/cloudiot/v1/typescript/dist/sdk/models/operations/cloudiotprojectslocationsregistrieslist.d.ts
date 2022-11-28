import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudiotProjectsLocationsRegistriesListQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesListSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesListSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesListSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesListRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesListPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesListQueryParams;
    security: CloudiotProjectsLocationsRegistriesListSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesListResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceRegistriesResponse?: shared.ListDeviceRegistriesResponse;
    statusCode: number;
}

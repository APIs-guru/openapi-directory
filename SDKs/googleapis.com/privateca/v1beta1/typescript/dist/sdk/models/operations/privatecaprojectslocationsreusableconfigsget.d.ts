import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsReusableConfigsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsReusableConfigsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsReusableConfigsGetPathParams;
    queryParams: PrivatecaProjectsLocationsReusableConfigsGetQueryParams;
    security: PrivatecaProjectsLocationsReusableConfigsGetSecurity;
}
export declare class PrivatecaProjectsLocationsReusableConfigsGetResponse extends SpeakeasyBase {
    contentType: string;
    reusableConfig?: shared.ReusableConfig;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams extends SpeakeasyBase {
    location: string;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    domainName?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams;
    security: DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse extends SpeakeasyBase {
    contentType: string;
    retrieveRegisterParametersResponse?: shared.RetrieveRegisterParametersResponse;
    statusCode: number;
}

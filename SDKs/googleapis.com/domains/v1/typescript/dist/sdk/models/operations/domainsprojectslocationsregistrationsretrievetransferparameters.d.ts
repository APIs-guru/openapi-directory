import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersPathParams extends SpeakeasyBase {
    location: string;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsRetrieveTransferParametersPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsRetrieveTransferParametersQueryParams;
    security: DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse extends SpeakeasyBase {
    contentType: string;
    retrieveTransferParametersResponse?: shared.RetrieveTransferParametersResponse;
    statusCode: number;
}

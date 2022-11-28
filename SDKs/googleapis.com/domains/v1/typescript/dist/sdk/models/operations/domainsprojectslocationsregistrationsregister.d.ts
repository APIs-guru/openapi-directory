import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsRegisterPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DomainsProjectsLocationsRegistrationsRegisterQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsRegisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsRegisterRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsRegisterPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsRegisterQueryParams;
    request?: shared.RegisterDomainRequestInput;
    security: DomainsProjectsLocationsRegistrationsRegisterSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsRegisterResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

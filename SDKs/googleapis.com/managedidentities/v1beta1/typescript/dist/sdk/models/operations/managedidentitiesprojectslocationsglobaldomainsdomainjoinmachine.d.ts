import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachinePathParams extends SpeakeasyBase {
    domain: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachinePathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineQueryParams;
    request?: shared.DomainJoinMachineRequest;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse extends SpeakeasyBase {
    contentType: string;
    domainJoinMachineResponse?: shared.DomainJoinMachineResponse;
    statusCode: number;
}

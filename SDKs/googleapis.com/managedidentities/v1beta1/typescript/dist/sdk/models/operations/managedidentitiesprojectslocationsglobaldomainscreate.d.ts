import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCreateQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsCreatePathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsCreateQueryParams;
    request?: shared.DomainInput;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

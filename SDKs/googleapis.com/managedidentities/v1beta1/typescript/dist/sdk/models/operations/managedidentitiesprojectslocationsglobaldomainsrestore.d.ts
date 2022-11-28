import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsRestorePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsRestoreQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsRestorePathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsRestoreQueryParams;
    request?: shared.RestoreDomainRequest;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams;
    request?: shared.AttachTrustRequest;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

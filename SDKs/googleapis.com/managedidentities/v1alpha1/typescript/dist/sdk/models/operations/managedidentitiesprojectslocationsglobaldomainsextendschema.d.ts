import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaQueryParams;
    request?: shared.ExtendSchemaRequest;
    security: ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

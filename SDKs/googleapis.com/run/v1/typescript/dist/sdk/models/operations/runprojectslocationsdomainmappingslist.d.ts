import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsDomainmappingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsDomainmappingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    continue?: string;
    fieldSelector?: string;
    fields?: string;
    includeUninitialized?: boolean;
    key?: string;
    labelSelector?: string;
    limit?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
    watch?: boolean;
}
export declare class RunProjectsLocationsDomainmappingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsDomainmappingsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsDomainmappingsListPathParams;
    queryParams: RunProjectsLocationsDomainmappingsListQueryParams;
    security: RunProjectsLocationsDomainmappingsListSecurity;
}
export declare class RunProjectsLocationsDomainmappingsListResponse extends SpeakeasyBase {
    contentType: string;
    listDomainMappingsResponse?: shared.ListDomainMappingsResponse;
    statusCode: number;
}

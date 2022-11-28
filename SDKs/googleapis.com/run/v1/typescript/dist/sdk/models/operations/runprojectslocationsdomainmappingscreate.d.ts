import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsDomainmappingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsDomainmappingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsDomainmappingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsDomainmappingsCreateRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsDomainmappingsCreatePathParams;
    queryParams: RunProjectsLocationsDomainmappingsCreateQueryParams;
    request?: shared.DomainMapping;
    security: RunProjectsLocationsDomainmappingsCreateSecurity;
}
export declare class RunProjectsLocationsDomainmappingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    domainMapping?: shared.DomainMapping;
    statusCode: number;
}

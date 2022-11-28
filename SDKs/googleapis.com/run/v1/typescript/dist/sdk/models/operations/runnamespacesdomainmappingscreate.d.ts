import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesDomainmappingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesDomainmappingsCreateQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesDomainmappingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesDomainmappingsCreateRequest extends SpeakeasyBase {
    pathParams: RunNamespacesDomainmappingsCreatePathParams;
    queryParams: RunNamespacesDomainmappingsCreateQueryParams;
    request?: shared.DomainMapping;
    security: RunNamespacesDomainmappingsCreateSecurity;
}
export declare class RunNamespacesDomainmappingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    domainMapping?: shared.DomainMapping;
    statusCode: number;
}

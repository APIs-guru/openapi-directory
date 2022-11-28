import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesDomainmappingsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesDomainmappingsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiVersion?: string;
    callback?: string;
    dryRun?: string;
    fields?: string;
    key?: string;
    kind?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    propagationPolicy?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunNamespacesDomainmappingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesDomainmappingsDeleteRequest extends SpeakeasyBase {
    pathParams: RunNamespacesDomainmappingsDeletePathParams;
    queryParams: RunNamespacesDomainmappingsDeleteQueryParams;
    security: RunNamespacesDomainmappingsDeleteSecurity;
}
export declare class RunNamespacesDomainmappingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    status?: shared.Status;
    statusCode: number;
}

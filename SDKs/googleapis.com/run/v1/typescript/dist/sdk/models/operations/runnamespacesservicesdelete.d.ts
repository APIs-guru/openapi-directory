import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesServicesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesServicesDeleteQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesServicesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesServicesDeleteRequest extends SpeakeasyBase {
    pathParams: RunNamespacesServicesDeletePathParams;
    queryParams: RunNamespacesServicesDeleteQueryParams;
    security: RunNamespacesServicesDeleteSecurity;
}
export declare class RunNamespacesServicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    status?: shared.Status;
    statusCode: number;
}

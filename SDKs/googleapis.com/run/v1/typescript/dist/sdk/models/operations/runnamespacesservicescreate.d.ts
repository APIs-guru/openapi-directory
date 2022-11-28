import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesServicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesServicesCreateQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesServicesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesServicesCreateRequest extends SpeakeasyBase {
    pathParams: RunNamespacesServicesCreatePathParams;
    queryParams: RunNamespacesServicesCreateQueryParams;
    request?: shared.ServiceInput;
    security: RunNamespacesServicesCreateSecurity;
}
export declare class RunNamespacesServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}

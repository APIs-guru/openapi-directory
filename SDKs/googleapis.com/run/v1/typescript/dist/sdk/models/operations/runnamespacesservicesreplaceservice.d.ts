import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesServicesReplaceServicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesServicesReplaceServiceQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesServicesReplaceServiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesServicesReplaceServiceRequest extends SpeakeasyBase {
    pathParams: RunNamespacesServicesReplaceServicePathParams;
    queryParams: RunNamespacesServicesReplaceServiceQueryParams;
    request?: shared.ServiceInput;
    security: RunNamespacesServicesReplaceServiceSecurity;
}
export declare class RunNamespacesServicesReplaceServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}

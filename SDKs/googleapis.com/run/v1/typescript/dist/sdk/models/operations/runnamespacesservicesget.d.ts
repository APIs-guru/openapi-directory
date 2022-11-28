import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesServicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesServicesGetQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesServicesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesServicesGetRequest extends SpeakeasyBase {
    pathParams: RunNamespacesServicesGetPathParams;
    queryParams: RunNamespacesServicesGetQueryParams;
    security: RunNamespacesServicesGetSecurity;
}
export declare class RunNamespacesServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDisableVpcServiceControlsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDisableVpcServiceControlsQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDisableVpcServiceControlsSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1;
    option2?: ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2;
}
export declare class ServicenetworkingServicesDisableVpcServiceControlsRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDisableVpcServiceControlsPathParams;
    queryParams: ServicenetworkingServicesDisableVpcServiceControlsQueryParams;
    request?: shared.DisableVpcServiceControlsRequest;
    security: ServicenetworkingServicesDisableVpcServiceControlsSecurity;
}
export declare class ServicenetworkingServicesDisableVpcServiceControlsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesEnableVpcServiceControlsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesEnableVpcServiceControlsQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesEnableVpcServiceControlsSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1;
    option2?: ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2;
}
export declare class ServicenetworkingServicesEnableVpcServiceControlsRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesEnableVpcServiceControlsPathParams;
    queryParams: ServicenetworkingServicesEnableVpcServiceControlsQueryParams;
    request?: shared.EnableVpcServiceControlsRequest;
    security: ServicenetworkingServicesEnableVpcServiceControlsSecurity;
}
export declare class ServicenetworkingServicesEnableVpcServiceControlsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

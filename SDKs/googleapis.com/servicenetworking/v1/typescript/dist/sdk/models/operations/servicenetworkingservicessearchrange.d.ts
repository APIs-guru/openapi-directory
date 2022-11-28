import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesSearchRangePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesSearchRangeQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesSearchRangeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesSearchRangeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesSearchRangeSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesSearchRangeSecurityOption1;
    option2?: ServicenetworkingServicesSearchRangeSecurityOption2;
}
export declare class ServicenetworkingServicesSearchRangeRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesSearchRangePathParams;
    queryParams: ServicenetworkingServicesSearchRangeQueryParams;
    request?: shared.SearchRangeRequest;
    security: ServicenetworkingServicesSearchRangeSecurity;
}
export declare class ServicenetworkingServicesSearchRangeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

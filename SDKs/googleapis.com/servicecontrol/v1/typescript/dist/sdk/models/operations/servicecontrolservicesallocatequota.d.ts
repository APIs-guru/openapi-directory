import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicecontrolServicesAllocateQuotaPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicecontrolServicesAllocateQuotaQueryParams extends SpeakeasyBase {
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
export declare class ServicecontrolServicesAllocateQuotaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesAllocateQuotaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesAllocateQuotaSecurity extends SpeakeasyBase {
    option1?: ServicecontrolServicesAllocateQuotaSecurityOption1;
    option2?: ServicecontrolServicesAllocateQuotaSecurityOption2;
}
export declare class ServicecontrolServicesAllocateQuotaRequest extends SpeakeasyBase {
    pathParams: ServicecontrolServicesAllocateQuotaPathParams;
    queryParams: ServicecontrolServicesAllocateQuotaQueryParams;
    request?: shared.AllocateQuotaRequest;
    security: ServicecontrolServicesAllocateQuotaSecurity;
}
export declare class ServicecontrolServicesAllocateQuotaResponse extends SpeakeasyBase {
    allocateQuotaResponse?: shared.AllocateQuotaResponse;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableManagedServicePathParams extends SpeakeasyBase {
    serviceId: number;
}
export declare class DisableManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DisableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DisableManagedServiceRequest extends SpeakeasyBase {
    pathParams: DisableManagedServicePathParams;
    security: DisableManagedServiceSecurity;
}
export declare class DisableManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
    disableManagedServiceDefaultApplicationJsonObject?: DisableManagedServiceDefaultApplicationJson;
}

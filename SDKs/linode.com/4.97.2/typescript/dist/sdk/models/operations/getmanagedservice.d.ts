import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedServicePathParams extends SpeakeasyBase {
    serviceId: number;
}
export declare class GetManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedServiceRequest extends SpeakeasyBase {
    pathParams: GetManagedServicePathParams;
    security: GetManagedServiceSecurity;
}
export declare class GetManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
    getManagedServiceDefaultApplicationJsonObject?: GetManagedServiceDefaultApplicationJson;
}

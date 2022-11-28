import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateManagedServicePathParams extends SpeakeasyBase {
    serviceId: number;
}
export declare class UpdateManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateManagedServiceRequest extends SpeakeasyBase {
    pathParams: UpdateManagedServicePathParams;
    request: shared.ManagedServiceInput;
    security: UpdateManagedServiceSecurity;
}
export declare class UpdateManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
    updateManagedServiceDefaultApplicationJsonObject?: UpdateManagedServiceDefaultApplicationJson;
}

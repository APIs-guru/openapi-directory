import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteManagedServicePathParams extends SpeakeasyBase {
    serviceId: number;
}
export declare class DeleteManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteManagedServiceRequest extends SpeakeasyBase {
    pathParams: DeleteManagedServicePathParams;
    security: DeleteManagedServiceSecurity;
}
export declare class DeleteManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteManagedService200ApplicationJsonObject?: Map<string, any>;
    deleteManagedServiceDefaultApplicationJsonObject?: DeleteManagedServiceDefaultApplicationJson;
}

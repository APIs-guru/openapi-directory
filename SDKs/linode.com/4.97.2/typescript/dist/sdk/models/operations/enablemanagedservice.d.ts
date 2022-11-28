import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableManagedServicePathParams extends SpeakeasyBase {
    serviceId: number;
}
export declare class EnableManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class EnableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class EnableManagedServiceRequest extends SpeakeasyBase {
    pathParams: EnableManagedServicePathParams;
    security: EnableManagedServiceSecurity;
}
export declare class EnableManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
    enableManagedServiceDefaultApplicationJsonObject?: EnableManagedServiceDefaultApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateManagedServiceRequestBodyServiceTypeEnum {
    Url = "url",
    Tcp = "tcp"
}
export declare class CreateManagedServiceRequestBodyInput extends SpeakeasyBase {
    address: string;
    body?: string;
    consultationGroup?: string;
    credentials?: number[];
    label: string;
    notes?: string;
    region?: string;
    serviceType: CreateManagedServiceRequestBodyServiceTypeEnum;
    timeout: number;
}
export declare class CreateManagedServiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateManagedServiceRequest extends SpeakeasyBase {
    request?: CreateManagedServiceRequestBodyInput;
    security: CreateManagedServiceSecurity;
}
export declare class CreateManagedServiceResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
    createManagedServiceDefaultApplicationJsonObject?: CreateManagedServiceDefaultApplicationJson;
}

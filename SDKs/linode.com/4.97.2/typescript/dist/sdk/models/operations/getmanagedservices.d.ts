import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedServicesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedServices200ApplicationJson extends SpeakeasyBase {
    data?: shared.ManagedService[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetManagedServicesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedServicesRequest extends SpeakeasyBase {
    security: GetManagedServicesSecurity;
}
export declare class GetManagedServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedServices200ApplicationJsonObject?: GetManagedServices200ApplicationJson;
    getManagedServicesDefaultApplicationJsonObject?: GetManagedServicesDefaultApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeyQuotasPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class ApiKeyQuotasSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeyQuotasRequest extends SpeakeasyBase {
    pathParams: ApiKeyQuotasPathParams;
    security: ApiKeyQuotasSecurity;
}
export declare class ApiKeyQuotasResponse extends SpeakeasyBase {
    contentType: string;
    quotas?: shared.Quotas;
    statusCode: number;
}

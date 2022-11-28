import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetApiKeyQuotasPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class ResetApiKeyQuotasSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ResetApiKeyQuotasRequest extends SpeakeasyBase {
    pathParams: ResetApiKeyQuotasPathParams;
    security: ResetApiKeyQuotasSecurity;
}
export declare class ResetApiKeyQuotasResponse extends SpeakeasyBase {
    contentType: string;
    quotas?: shared.Quotas;
    statusCode: number;
}

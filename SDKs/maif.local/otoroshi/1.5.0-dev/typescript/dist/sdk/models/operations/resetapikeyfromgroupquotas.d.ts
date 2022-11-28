import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class ResetApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ResetApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
    pathParams: ResetApiKeyFromGroupQuotasPathParams;
    security: ResetApiKeyFromGroupQuotasSecurity;
}
export declare class ResetApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
    contentType: string;
    quotas?: shared.Quotas;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class ApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
    pathParams: ApiKeyFromGroupQuotasPathParams;
    security: ApiKeyFromGroupQuotasSecurity;
}
export declare class ApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
    contentType: string;
    quotas?: shared.Quotas;
    statusCode: number;
}

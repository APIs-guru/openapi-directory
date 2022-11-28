import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckKeyUsabilityPathParams extends SpeakeasyBase {
    key: string;
}
export declare class CheckKeyUsabilityQueryParams extends SpeakeasyBase {
    userToken?: string;
}
export declare class CheckKeyUsabilitySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class CheckKeyUsabilityRequest extends SpeakeasyBase {
    pathParams: CheckKeyUsabilityPathParams;
    queryParams: CheckKeyUsabilityQueryParams;
    security: CheckKeyUsabilitySecurity;
}
export declare class CheckKeyUsabilityResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    keyUsabilityResponseSchema?: shared.KeyUsabilityResponseSchema;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdrnToAddressPathParams extends SpeakeasyBase {
    udprn: string;
}
export declare class UpdrnToAddressQueryParams extends SpeakeasyBase {
    filter?: string;
    licensee?: string;
}
export declare class UpdrnToAddressSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class UpdrnToAddressRequest extends SpeakeasyBase {
    pathParams: UpdrnToAddressPathParams;
    queryParams: UpdrnToAddressQueryParams;
    security: UpdrnToAddressSecurity;
}
export declare class UpdrnToAddressResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    statusCode: number;
    udprnToAddressResponseSchema?: shared.UdprnToAddressResponseSchema;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LookupUdprnPathParams extends SpeakeasyBase {
    udprn: string;
}
export declare class LookupUdprnQueryParams extends SpeakeasyBase {
    filter?: string;
    licensee?: string;
}
export declare class LookupUdprnSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class LookupUdprnRequest extends SpeakeasyBase {
    pathParams: LookupUdprnPathParams;
    queryParams: LookupUdprnQueryParams;
    security: LookupUdprnSecurity;
}
export declare class LookupUdprnResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    statusCode: number;
}

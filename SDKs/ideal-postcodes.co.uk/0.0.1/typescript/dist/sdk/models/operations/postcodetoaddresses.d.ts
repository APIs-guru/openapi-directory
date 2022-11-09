import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostcodeToAddressesPathParams extends SpeakeasyBase {
    postcode: string;
}
export declare class PostcodeToAddressesQueryParams extends SpeakeasyBase {
    filter?: string;
    licensee?: string;
    page?: number;
}
export declare class PostcodeToAddressesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class PostcodeToAddressesRequest extends SpeakeasyBase {
    pathParams: PostcodeToAddressesPathParams;
    queryParams: PostcodeToAddressesQueryParams;
    security: PostcodeToAddressesSecurity;
}
export declare class PostcodeToAddressesResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    postcodeToAddressResponseSchema?: shared.PostcodeToAddressResponseSchema;
    statusCode: number;
}

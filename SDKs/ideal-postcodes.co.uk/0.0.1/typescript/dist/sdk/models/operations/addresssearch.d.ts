import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddressSearchQueryParams extends SpeakeasyBase {
    filter?: string;
    licensee?: string;
    limit?: number;
    page?: number;
    postcodeOutward?: string;
    query: string;
}
export declare class AddressSearchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class AddressSearchRequest extends SpeakeasyBase {
    queryParams: AddressSearchQueryParams;
    security: AddressSearchSecurity;
}
export declare class AddressSearchResponse extends SpeakeasyBase {
    addressSearchResponseSchema?: shared.AddressSearchResponseSchema;
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    statusCode: number;
}

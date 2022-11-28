import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddressAutocompleteQueryParams extends SpeakeasyBase {
    licensee?: string;
    limit?: number;
    postcodeOutward?: string;
    query: string;
}
export declare class AddressAutocompleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class AddressAutocompleteRequest extends SpeakeasyBase {
    queryParams: AddressAutocompleteQueryParams;
    security: AddressAutocompleteSecurity;
}
export declare class AddressAutocompleteResponse extends SpeakeasyBase {
    addressAutocompleteResponseSchema?: shared.AddressAutocompleteResponseSchema;
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    statusCode: number;
}

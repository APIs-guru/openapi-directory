import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddListingProviderQueryParams extends SpeakeasyBase {
    pw?: string;
    validateListings?: boolean;
    validateLogin?: boolean;
}
export declare class AddListingProviderRequests extends SpeakeasyBase {
    listingsProviderInfo?: shared.ListingsProviderInfo;
    listingsProviderInfo1?: shared.ListingsProviderInfo;
    listingsProviderInfo2?: shared.ListingsProviderInfo;
}
export declare class AddListingProviderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddListingProviderRequest extends SpeakeasyBase {
    queryParams: AddListingProviderQueryParams;
    request?: AddListingProviderRequests;
    security: AddListingProviderSecurity;
}
export declare class AddListingProviderResponse extends SpeakeasyBase {
    contentType: string;
    listingsProviderInfo?: shared.ListingsProviderInfo;
    statusCode: number;
}

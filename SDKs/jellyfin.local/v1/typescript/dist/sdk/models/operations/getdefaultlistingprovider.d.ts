import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDefaultListingProviderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDefaultListingProviderRequest extends SpeakeasyBase {
    security: GetDefaultListingProviderSecurity;
}
export declare class GetDefaultListingProviderResponse extends SpeakeasyBase {
    contentType: string;
    listingsProviderInfo?: shared.ListingsProviderInfo;
    statusCode: number;
}

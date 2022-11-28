import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteListingProviderQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteListingProviderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteListingProviderRequest extends SpeakeasyBase {
    queryParams: DeleteListingProviderQueryParams;
    security: DeleteListingProviderSecurity;
}
export declare class DeleteListingProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

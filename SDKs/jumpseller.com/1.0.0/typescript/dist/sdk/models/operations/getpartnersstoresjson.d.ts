import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartnersStoresJsonQueryParams extends SpeakeasyBase {
    authToken: string;
    from: string;
    page?: number;
    partnerCode: string;
    to: string;
}
export declare class GetPartnersStoresJsonRequest extends SpeakeasyBase {
    queryParams: GetPartnersStoresJsonQueryParams;
}
export declare class GetPartnersStoresJsonResponse extends SpeakeasyBase {
    contentType: string;
    partnerError?: shared.PartnerError;
    statusCode: number;
    types?: shared.Type[];
}

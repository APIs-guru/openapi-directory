import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreCheckStatusJsonQueryParams extends SpeakeasyBase {
    authToken: string;
    locale?: string;
    partnerCode: string;
    storeCode: string;
}
export declare class GetStoreCheckStatusJsonRequest extends SpeakeasyBase {
    queryParams: GetStoreCheckStatusJsonQueryParams;
}
export declare class GetStoreCheckStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    getStoreCheckStatusJson200ApplicationJsonOneOf?: any;
    partnerError?: shared.PartnerError;
    statusCode: number;
}

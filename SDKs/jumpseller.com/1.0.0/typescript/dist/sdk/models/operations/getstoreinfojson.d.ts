import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreInfoJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetStoreInfoJsonRequest extends SpeakeasyBase {
    queryParams: GetStoreInfoJsonQueryParams;
}
export declare class GetStoreInfoJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    store?: shared.Store;
}

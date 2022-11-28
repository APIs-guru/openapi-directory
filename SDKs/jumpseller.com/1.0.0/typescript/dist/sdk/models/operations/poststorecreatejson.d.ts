import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostStoreCreateJsonQueryParams extends SpeakeasyBase {
    authToken: string;
    partnerCode: string;
}
export declare class PostStoreCreateJsonRequest extends SpeakeasyBase {
    queryParams: PostStoreCreateJsonQueryParams;
    request: shared.PartnerStoreCreate;
}
export declare class PostStoreCreateJsonResponse extends SpeakeasyBase {
    contentType: string;
    partnerError?: shared.PartnerError;
    partnerStoreCode?: shared.PartnerStoreCode;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1CustomersIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1CustomersIdPathParams;
}
export declare class GetConsumerV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    customerViewModel?: shared.CustomerViewModel;
    statusCode: number;
}

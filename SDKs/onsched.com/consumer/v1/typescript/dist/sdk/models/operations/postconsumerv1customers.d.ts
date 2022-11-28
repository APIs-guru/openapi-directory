import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostConsumerV1CustomersRequests extends SpeakeasyBase {
    customerInputModel?: shared.CustomerInputModel;
    customerInputModel1?: shared.CustomerInputModel;
    customerInputModel2?: shared.CustomerInputModel;
    customerInputModel3?: shared.CustomerInputModel;
}
export declare class PostConsumerV1CustomersRequest extends SpeakeasyBase {
    request?: PostConsumerV1CustomersRequests;
}
export declare class PostConsumerV1CustomersResponse extends SpeakeasyBase {
    contentType: string;
    customerViewModel?: shared.CustomerViewModel;
    statusCode: number;
}

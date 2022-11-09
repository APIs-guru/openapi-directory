import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutConsumerV1CustomersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1CustomersIdRequests extends SpeakeasyBase {
    customerUpdateModel?: shared.CustomerUpdateModel;
    customerUpdateModel1?: shared.CustomerUpdateModel;
    customerUpdateModel2?: shared.CustomerUpdateModel;
    customerUpdateModel3?: shared.CustomerUpdateModel;
}
export declare class PutConsumerV1CustomersIdRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1CustomersIdPathParams;
    request?: PutConsumerV1CustomersIdRequests;
}
export declare class PutConsumerV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

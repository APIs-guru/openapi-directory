import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersPlansIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1CustomersPlansIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1CustomersPlansIdPathParams;
}
export declare class GetConsumerV1CustomersPlansIdResponse extends SpeakeasyBase {
    contentType: string;
    customerPlanViewModel?: shared.CustomerPlanViewModel;
    statusCode: number;
}

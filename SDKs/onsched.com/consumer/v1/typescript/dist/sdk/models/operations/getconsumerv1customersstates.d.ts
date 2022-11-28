import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersStatesQueryParams extends SpeakeasyBase {
    country?: string;
}
export declare class GetConsumerV1CustomersStatesRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersStatesQueryParams;
}
export declare class GetConsumerV1CustomersStatesResponse extends SpeakeasyBase {
    contentType: string;
    stateViewModels?: shared.StateViewModel[];
    statusCode: number;
}

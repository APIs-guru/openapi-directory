import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConsumerV1CustomersPlansQueryParams extends SpeakeasyBase {
    groupId?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetConsumerV1CustomersPlansRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersPlansQueryParams;
}
export declare class GetConsumerV1CustomersPlansResponse extends SpeakeasyBase {
    contentType: string;
    customerPlanListViewModel?: Map<string, any>;
    statusCode: number;
}

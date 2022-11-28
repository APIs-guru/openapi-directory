import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1CustomersQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    email?: string;
    groupId?: string;
    lastname?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetConsumerV1CustomersRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersQueryParams;
}
export declare class GetConsumerV1CustomersResponse extends SpeakeasyBase {
    contentType: string;
    customerListViewModel?: Map<string, any>;
    statusCode: number;
}

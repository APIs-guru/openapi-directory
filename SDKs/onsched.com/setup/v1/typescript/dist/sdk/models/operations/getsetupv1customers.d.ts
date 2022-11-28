import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CustomersQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    email?: string;
    groupId?: string;
    lastname?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetSetupV1CustomersRequest extends SpeakeasyBase {
    queryParams: GetSetupV1CustomersQueryParams;
}
export declare class GetSetupV1CustomersResponse extends SpeakeasyBase {
    contentType: string;
    customerListViewModel?: Map<string, any>;
    statusCode: number;
}

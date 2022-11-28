import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams extends SpeakeasyBase {
    dateTimeTz: Date;
    id: string;
    resourceId: string;
    serviceId: string;
}
export declare class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams;
}
export declare class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse extends SpeakeasyBase {
    contentType: string;
    planLimitListViewModel?: Map<string, any>;
    statusCode: number;
}

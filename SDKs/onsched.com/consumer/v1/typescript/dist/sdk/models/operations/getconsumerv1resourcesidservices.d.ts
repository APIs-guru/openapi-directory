import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1ResourcesIdServicesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetConsumerV1ResourcesIdServicesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetConsumerV1ResourcesIdServicesRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ResourcesIdServicesPathParams;
    queryParams: GetConsumerV1ResourcesIdServicesQueryParams;
}
export declare class GetConsumerV1ResourcesIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    resourceServiceListViewModel?: Map<string, any>;
    statusCode: number;
}

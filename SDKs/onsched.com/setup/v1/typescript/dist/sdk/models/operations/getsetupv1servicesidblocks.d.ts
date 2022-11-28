import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ServicesIdBlocksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdBlocksQueryParams extends SpeakeasyBase {
    endDate?: Date;
    limit?: number;
    offset?: number;
    startDate?: Date;
}
export declare class GetSetupV1ServicesIdBlocksRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdBlocksPathParams;
    queryParams: GetSetupV1ServicesIdBlocksQueryParams;
}
export declare class GetSetupV1ServicesIdBlocksResponse extends SpeakeasyBase {
    contentType: string;
    serviceBlockListViewModel?: Map<string, any>;
    statusCode: number;
}

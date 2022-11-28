import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ResourcesIdBlocksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesIdBlocksQueryParams extends SpeakeasyBase {
    endDate?: Date;
    limit?: number;
    offset?: number;
    startDate?: Date;
}
export declare class GetSetupV1ResourcesIdBlocksRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdBlocksPathParams;
    queryParams: GetSetupV1ResourcesIdBlocksQueryParams;
}
export declare class GetSetupV1ResourcesIdBlocksResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockListViewModel?: Map<string, any>;
    statusCode: number;
}

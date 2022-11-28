import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ResourcegroupsQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetSetupV1ResourcegroupsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1ResourcegroupsQueryParams;
}
export declare class GetSetupV1ResourcegroupsResponse extends SpeakeasyBase {
    contentType: string;
    resourceGroupListViewModel?: Map<string, any>;
    statusCode: number;
}

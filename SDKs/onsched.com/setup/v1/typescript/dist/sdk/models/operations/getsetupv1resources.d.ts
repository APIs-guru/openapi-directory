import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ResourcesQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    email?: string;
    googleAuthReturnUrl?: string;
    limit?: number;
    locationId?: string;
    name?: string;
    offset?: number;
    outlookAuthReturnUrl?: string;
    resourceGroupId?: string;
}
export declare class GetSetupV1ResourcesRequest extends SpeakeasyBase {
    queryParams: GetSetupV1ResourcesQueryParams;
}
export declare class GetSetupV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceListViewModel?: Map<string, any>;
    statusCode: number;
}

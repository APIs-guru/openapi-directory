import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ServicesIdResourcesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdResourcesQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    limit?: number;
    offset?: number;
    outlookAuthReturnUrl?: string;
}
export declare class GetSetupV1ServicesIdResourcesRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdResourcesPathParams;
    queryParams: GetSetupV1ServicesIdResourcesQueryParams;
}
export declare class GetSetupV1ServicesIdResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceListViewModel?: Map<string, any>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1ServicesQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    limit?: number;
    locationId?: string;
    offset?: number;
    serviceGroupId?: number;
}
export declare class GetSetupV1ServicesRequest extends SpeakeasyBase {
    queryParams: GetSetupV1ServicesQueryParams;
}
export declare class GetSetupV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    serviceListViewModel?: Map<string, any>;
    statusCode: number;
}

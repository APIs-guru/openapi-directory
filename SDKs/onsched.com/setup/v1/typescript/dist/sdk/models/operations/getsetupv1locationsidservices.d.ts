import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdServicesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdServicesPathParams;
    queryParams: GetSetupV1LocationsIdServicesQueryParams;
}
export declare class GetSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
    businessServiceListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}

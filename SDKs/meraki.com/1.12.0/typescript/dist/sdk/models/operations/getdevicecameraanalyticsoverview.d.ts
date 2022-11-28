import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraAnalyticsOverviewPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum GetDeviceCameraAnalyticsOverviewObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}
export declare class GetDeviceCameraAnalyticsOverviewQueryParams extends SpeakeasyBase {
    objectType?: GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetDeviceCameraAnalyticsOverviewRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraAnalyticsOverviewPathParams;
    queryParams: GetDeviceCameraAnalyticsOverviewQueryParams;
}
export declare class GetDeviceCameraAnalyticsOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraAnalyticsOverview200ApplicationJsonObject?: Map<string, any>;
}

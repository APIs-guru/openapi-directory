import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationInsightMonitoredMediaServersPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationInsightMonitoredMediaServersRequest extends SpeakeasyBase {
    pathParams: GetOrganizationInsightMonitoredMediaServersPathParams;
}
export declare class GetOrganizationInsightMonitoredMediaServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationInsightMonitoredMediaServers200ApplicationJsonObject?: Map<string, any>;
}

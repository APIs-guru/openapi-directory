import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
    monitoredMediaServerId: string;
    organizationId: string;
}
export declare class GetOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    pathParams: GetOrganizationInsightMonitoredMediaServerPathParams;
}
export declare class GetOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

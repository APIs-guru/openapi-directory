import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
    monitoredMediaServerId: string;
    organizationId: string;
}
export declare class UpdateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
    address?: string;
    bestEffortMonitoringEnabled?: boolean;
    name?: string;
}
export declare class UpdateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationInsightMonitoredMediaServerPathParams;
    request?: UpdateOrganizationInsightMonitoredMediaServerRequestBody;
}
export declare class UpdateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

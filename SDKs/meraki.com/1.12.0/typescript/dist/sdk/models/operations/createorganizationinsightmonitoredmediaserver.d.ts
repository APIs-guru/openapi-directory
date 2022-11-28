import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CreateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
    address: string;
    bestEffortMonitoringEnabled?: boolean;
    name: string;
}
export declare class CreateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationInsightMonitoredMediaServerPathParams;
    request: CreateOrganizationInsightMonitoredMediaServerRequestBody;
}
export declare class CreateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationInsightMonitoredMediaServer201ApplicationJsonObject?: Map<string, any>;
}

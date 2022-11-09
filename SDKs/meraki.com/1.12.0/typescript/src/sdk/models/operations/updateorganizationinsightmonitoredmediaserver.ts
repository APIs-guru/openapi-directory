import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=bestEffortMonitoringEnabled" })
  bestEffortMonitoringEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationInsightMonitoredMediaServerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationInsightMonitoredMediaServerRequestBody;
}


export class UpdateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

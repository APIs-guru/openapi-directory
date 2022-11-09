import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationInsightMonitoredMediaServerPathParams;
}


export class GetOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

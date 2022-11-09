import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationInsightMonitoredMediaServersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightMonitoredMediaServersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationInsightMonitoredMediaServersPathParams;
}


export class GetOrganizationInsightMonitoredMediaServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationInsightMonitoredMediaServers200ApplicationJsonObject?: Map<string, any>;
}

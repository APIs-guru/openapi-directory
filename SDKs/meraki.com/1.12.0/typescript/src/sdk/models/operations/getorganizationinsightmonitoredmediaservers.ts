import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationInsightMonitoredMediaServersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightMonitoredMediaServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationInsightMonitoredMediaServersPathParams;
}


export class GetOrganizationInsightMonitoredMediaServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationInsightMonitoredMediaServers200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationInsightMonitoredMediaServerPathParams;
}


export class GetOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

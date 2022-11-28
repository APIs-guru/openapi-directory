import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=bestEffortMonitoringEnabled" })
  bestEffortMonitoringEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationInsightMonitoredMediaServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationInsightMonitoredMediaServerRequestBody;
}


export class UpdateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationInsightMonitoredMediaServer200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=bestEffortMonitoringEnabled" })
  bestEffortMonitoringEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CreateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationInsightMonitoredMediaServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationInsightMonitoredMediaServerRequestBody;
}


export class CreateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationInsightMonitoredMediaServer201ApplicationJsonObject?: Map<string, any>;
}

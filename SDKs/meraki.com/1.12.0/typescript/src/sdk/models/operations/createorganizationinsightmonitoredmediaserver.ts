import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=bestEffortMonitoringEnabled" })
  bestEffortMonitoringEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationInsightMonitoredMediaServerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationInsightMonitoredMediaServerRequestBody;
}


export class CreateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationInsightMonitoredMediaServer201ApplicationJsonObject?: Map<string, any>;
}

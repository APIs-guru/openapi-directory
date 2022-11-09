import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationInsightMonitoredMediaServerPathParams;
}


export class DeleteOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

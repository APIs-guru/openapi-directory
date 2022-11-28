import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationInsightMonitoredMediaServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitoredMediaServerId" })
  monitoredMediaServerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrganizationInsightMonitoredMediaServerPathParams;
}


export class DeleteOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

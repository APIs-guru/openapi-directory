import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationWebhooksAlertTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationWebhooksAlertTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationWebhooksAlertTypesPathParams;
}


export class GetOrganizationWebhooksAlertTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationWebhooksAlertTypes200ApplicationJsonObject?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationWebhooksAlertTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationWebhooksAlertTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationWebhooksAlertTypesPathParams;
}


export class GetOrganizationWebhooksAlertTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationWebhooksAlertTypes200ApplicationJsonObject?: Map<string, any>;
}

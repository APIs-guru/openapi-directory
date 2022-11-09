import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSmVppAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSmVppAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSmVppAccountsPathParams;
}


export class GetOrganizationSmVppAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSmVppAccounts200ApplicationJsonObject?: Map<string, any>;
}

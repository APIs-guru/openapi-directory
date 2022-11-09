import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSmVppAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vppAccountId" })
  vppAccountId: string;
}


export class GetOrganizationSmVppAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSmVppAccountPathParams;
}


export class GetOrganizationSmVppAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSmVppAccount200ApplicationJsonObject?: Map<string, any>;
}

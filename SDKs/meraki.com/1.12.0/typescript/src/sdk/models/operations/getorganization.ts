import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationPathParams;
}


export class GetOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganization200ApplicationJsonObject?: Map<string, any>;
}

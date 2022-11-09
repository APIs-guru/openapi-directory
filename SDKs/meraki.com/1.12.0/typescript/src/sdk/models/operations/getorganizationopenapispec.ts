import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationOpenapiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationOpenapiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationOpenapiSpecPathParams;
}


export class GetOrganizationOpenapiSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationOpenapiSpec200ApplicationJsonObject?: Map<string, any>;
}

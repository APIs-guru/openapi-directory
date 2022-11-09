import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSamlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSamlPathParams;
}


export class GetOrganizationSamlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSaml200ApplicationJsonObject?: Map<string, any>;
}

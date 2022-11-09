import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSamlIdpsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlIdpsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSamlIdpsPathParams;
}


export class GetOrganizationSamlIdpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSamlIdps200ApplicationJsonObject?: Map<string, any>;
}

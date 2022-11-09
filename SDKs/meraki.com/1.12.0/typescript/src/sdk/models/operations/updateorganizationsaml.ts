import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationSamlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationSamlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateOrganizationSamlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationSamlPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSamlRequestBody;
}


export class UpdateOrganizationSamlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationSaml200ApplicationJsonObject?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationConfigTemplatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationConfigTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationConfigTemplatesPathParams;
}


export class GetOrganizationConfigTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationConfigTemplates200ApplicationJsonObject?: Map<string, any>;
}

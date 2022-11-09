import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyFromNetworkId" })
  copyFromNetworkId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class CreateOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationConfigTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationConfigTemplateRequestBody;
}


export class CreateOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationConfigTemplate201ApplicationJsonObject?: Map<string, any>;
}

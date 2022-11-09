import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class UpdateOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationConfigTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationConfigTemplateRequestBody;
}


export class UpdateOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationConfigTemplate200ApplicationJsonObject?: Map<string, any>;
}

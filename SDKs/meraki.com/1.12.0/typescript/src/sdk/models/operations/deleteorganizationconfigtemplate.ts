import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationConfigTemplatePathParams;
}


export class DeleteOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class DeleteOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrganizationConfigTemplatePathParams;
}


export class DeleteOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

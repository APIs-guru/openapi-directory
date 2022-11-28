import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationConfigTemplatePathParams;
}


export class GetOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationConfigTemplate200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationConfigTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyFromNetworkId" })
  copyFromNetworkId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class CreateOrganizationConfigTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationConfigTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationConfigTemplateRequestBody;
}


export class CreateOrganizationConfigTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationConfigTemplate201ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


// UpdateOrganizationRequestBodyApi
/** 
 * API-specific settings
**/
export class UpdateOrganizationRequestBodyApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: UpdateOrganizationRequestBodyApi;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationRequestBody;
}


export class UpdateOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganization200ApplicationJsonObject?: Map<string, any>;
}

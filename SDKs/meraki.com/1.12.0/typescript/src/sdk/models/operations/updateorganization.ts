import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


// UpdateOrganizationRequestBodyApi
/** 
 * API-specific settings
**/
export class UpdateOrganizationRequestBodyApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: UpdateOrganizationRequestBodyApi;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationRequestBody;
}


export class UpdateOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganization200ApplicationJsonObject?: Map<string, any>;
}

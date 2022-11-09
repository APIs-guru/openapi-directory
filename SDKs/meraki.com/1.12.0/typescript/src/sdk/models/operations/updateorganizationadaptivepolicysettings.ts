import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationAdaptivePolicySettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledNetworks" })
  enabledNetworks?: string[];
}


export class UpdateOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationAdaptivePolicySettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdaptivePolicySettingsRequestBody;
}


export class UpdateOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}

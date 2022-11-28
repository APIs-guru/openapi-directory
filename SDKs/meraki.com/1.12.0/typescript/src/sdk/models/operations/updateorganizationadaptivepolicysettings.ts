import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationAdaptivePolicySettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledNetworks" })
  enabledNetworks?: string[];
}


export class UpdateOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationAdaptivePolicySettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdaptivePolicySettingsRequestBody;
}


export class UpdateOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}

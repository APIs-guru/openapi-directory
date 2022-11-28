import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationAdaptivePolicySettingsPathParams;
}


export class GetOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}

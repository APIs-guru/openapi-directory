import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationAdaptivePolicySettingsPathParams;
}


export class GetOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationApplianceSecurityIntrusionPathParams;
}


export class GetOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}

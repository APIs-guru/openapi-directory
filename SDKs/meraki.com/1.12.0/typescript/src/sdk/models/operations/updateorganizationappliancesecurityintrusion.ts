import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId: string;
}


export class UpdateOrganizationApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedRules", elemType: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules })
  allowedRules: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[];
}


export class UpdateOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationApplianceSecurityIntrusionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationApplianceSecurityIntrusionRequestBody;
}


export class UpdateOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}

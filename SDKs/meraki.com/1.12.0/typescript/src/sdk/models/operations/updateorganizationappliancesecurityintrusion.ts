import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ruleId" })
  ruleId: string;
}


export class UpdateOrganizationApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedRules", elemType: operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules })
  allowedRules: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[];
}


export class UpdateOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationApplianceSecurityIntrusionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationApplianceSecurityIntrusionRequestBody;
}


export class UpdateOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}

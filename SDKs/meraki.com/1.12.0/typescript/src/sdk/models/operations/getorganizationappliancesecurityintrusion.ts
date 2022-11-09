import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceSecurityIntrusionPathParams;
}


export class GetOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}

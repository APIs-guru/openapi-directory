import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationLoginSecurityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLoginSecurityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationLoginSecurityPathParams;
}


export class GetOrganizationLoginSecurityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}

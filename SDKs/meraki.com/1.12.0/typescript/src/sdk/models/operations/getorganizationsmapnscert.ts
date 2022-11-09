import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationSmApnsCertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSmApnsCertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationSmApnsCertPathParams;
}


export class GetOrganizationSmApnsCertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationSmApnsCert200ApplicationJsonObject?: Map<string, any>;
}

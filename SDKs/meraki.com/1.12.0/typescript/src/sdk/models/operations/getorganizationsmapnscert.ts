import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationSmApnsCertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSmApnsCertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationSmApnsCertPathParams;
}


export class GetOrganizationSmApnsCertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationSmApnsCert200ApplicationJsonObject?: Map<string, any>;
}

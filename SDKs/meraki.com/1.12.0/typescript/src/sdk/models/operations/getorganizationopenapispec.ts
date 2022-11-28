import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationOpenapiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationOpenapiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationOpenapiSpecPathParams;
}


export class GetOrganizationOpenapiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationOpenapiSpec200ApplicationJsonObject?: Map<string, any>;
}

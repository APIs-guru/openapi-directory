import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationSamlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationSamlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationSamlPathParams;
}


export class GetOrganizationSamlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationSaml200ApplicationJsonObject?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CombineOrganizationNetworksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CombineOrganizationNetworksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enrollmentString" })
  enrollmentString?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networkIds" })
  networkIds: string[];
}


export class CombineOrganizationNetworksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CombineOrganizationNetworksPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CombineOrganizationNetworksRequestBody;
}


export class CombineOrganizationNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  combineOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}

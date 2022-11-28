import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CombineOrganizationNetworksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CombineOrganizationNetworksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enrollmentString" })
  enrollmentString?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=networkIds" })
  networkIds: string[];
}


export class CombineOrganizationNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CombineOrganizationNetworksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CombineOrganizationNetworksRequestBody;
}


export class CombineOrganizationNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  combineOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}

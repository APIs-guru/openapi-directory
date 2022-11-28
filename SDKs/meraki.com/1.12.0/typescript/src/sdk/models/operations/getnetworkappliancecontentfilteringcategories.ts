import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceContentFilteringCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceContentFilteringCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceContentFilteringCategoriesPathParams;
}


export class GetNetworkApplianceContentFilteringCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceContentFilteringCategories200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkTrafficShapingApplicationCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficShapingApplicationCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkTrafficShapingApplicationCategoriesPathParams;
}


export class GetNetworkTrafficShapingApplicationCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkTrafficShapingApplicationCategories200ApplicationJsonObject?: Map<string, any>;
}

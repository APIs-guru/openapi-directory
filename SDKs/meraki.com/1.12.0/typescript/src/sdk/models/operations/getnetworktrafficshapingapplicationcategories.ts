import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkTrafficShapingApplicationCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficShapingApplicationCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkTrafficShapingApplicationCategoriesPathParams;
}


export class GetNetworkTrafficShapingApplicationCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkTrafficShapingApplicationCategories200ApplicationJsonObject?: Map<string, any>;
}

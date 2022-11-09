import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceContentFilteringCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceContentFilteringCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceContentFilteringCategoriesPathParams;
}


export class GetNetworkApplianceContentFilteringCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceContentFilteringCategories200ApplicationJsonObject?: Map<string, any>;
}

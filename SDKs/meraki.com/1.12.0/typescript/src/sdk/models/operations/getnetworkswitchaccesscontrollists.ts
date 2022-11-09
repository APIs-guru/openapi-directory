import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchAccessControlListsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchAccessControlListsPathParams;
}


export class GetNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchAccessControlLists200ApplicationJsonObject?: Map<string, any>;
}

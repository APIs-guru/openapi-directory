import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkMerakiAuthUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMerakiAuthUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkMerakiAuthUsersPathParams;
}


export class GetNetworkMerakiAuthUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkMerakiAuthUsers200ApplicationJsonObject?: Map<string, any>;
}

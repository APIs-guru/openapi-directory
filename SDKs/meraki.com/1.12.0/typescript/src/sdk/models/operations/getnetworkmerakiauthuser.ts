import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkMerakiAuthUserPathParams;
}


export class GetNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}

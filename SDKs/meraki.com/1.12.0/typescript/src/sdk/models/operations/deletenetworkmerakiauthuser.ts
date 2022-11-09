import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkMerakiAuthUserPathParams;
}


export class DeleteNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

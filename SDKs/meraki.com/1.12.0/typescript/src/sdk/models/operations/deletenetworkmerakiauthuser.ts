import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merakiAuthUserId" })
  merakiAuthUserId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkMerakiAuthUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkMerakiAuthUserPathParams;
}


export class DeleteNetworkMerakiAuthUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

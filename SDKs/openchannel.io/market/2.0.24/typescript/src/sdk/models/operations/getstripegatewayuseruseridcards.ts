import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStripeGatewayUserUserIdCardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStripeGatewayUserUserIdCardsPathParams;
}


export class GetStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStripeGatewayUserUserIdCardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStripeGatewayUserUserIdCardsPathParams;
}


export class GetStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

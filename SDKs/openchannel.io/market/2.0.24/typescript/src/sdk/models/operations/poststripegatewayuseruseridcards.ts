import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStripeGatewayUserUserIdCardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostStripeGatewayUserUserIdCardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PostStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStripeGatewayUserUserIdCardsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostStripeGatewayUserUserIdCardsQueryParams;
}


export class PostStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

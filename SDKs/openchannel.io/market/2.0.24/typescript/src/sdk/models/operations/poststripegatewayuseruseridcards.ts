import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStripeGatewayUserUserIdCardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostStripeGatewayUserUserIdCardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PostStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStripeGatewayUserUserIdCardsPathParams;

  @Metadata()
  queryParams: PostStripeGatewayUserUserIdCardsQueryParams;
}


export class PostStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

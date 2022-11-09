import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStripeGatewayUserUserIdCardsCardIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostStripeGatewayUserUserIdCardsCardIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=address_city" })
  addressCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address_country" })
  addressCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address_line1" })
  addressLine1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address_line2" })
  addressLine2?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address_state" })
  addressState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address_zip" })
  addressZip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isDefault" })
  isDefault?: boolean;
}


export class PostStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStripeGatewayUserUserIdCardsCardIdPathParams;

  @Metadata()
  queryParams: PostStripeGatewayUserUserIdCardsCardIdQueryParams;
}


export class PostStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

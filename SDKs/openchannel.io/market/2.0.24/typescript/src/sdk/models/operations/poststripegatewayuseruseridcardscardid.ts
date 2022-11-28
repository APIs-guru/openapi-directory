import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStripeGatewayUserUserIdCardsCardIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostStripeGatewayUserUserIdCardsCardIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_city" })
  addressCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_country" })
  addressCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_line1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_state" })
  addressState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_zip" })
  addressZip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDefault" })
  isDefault?: boolean;
}


export class PostStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStripeGatewayUserUserIdCardsCardIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostStripeGatewayUserUserIdCardsCardIdQueryParams;
}


export class PostStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

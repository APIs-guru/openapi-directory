import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStripeGatewayUserUserIdCardsCardIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStripeGatewayUserUserIdCardsCardIdPathParams;
}


export class DeleteStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

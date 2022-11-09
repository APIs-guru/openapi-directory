import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStripeGatewayUserUserIdCardsCardIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStripeGatewayUserUserIdCardsCardIdPathParams;
}


export class DeleteStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

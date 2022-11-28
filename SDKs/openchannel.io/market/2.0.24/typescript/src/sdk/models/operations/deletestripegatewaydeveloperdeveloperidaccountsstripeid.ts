import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stripeId" })
  stripeId: string;
}


export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams;
}


export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

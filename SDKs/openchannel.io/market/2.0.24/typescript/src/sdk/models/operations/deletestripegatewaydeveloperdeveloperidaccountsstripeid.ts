import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stripeId" })
  stripeId: string;
}


export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams;
}


export class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStripeGatewayDeveloperDeveloperIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class GetStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStripeGatewayDeveloperDeveloperIdAccountsPathParams;
}


export class GetStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

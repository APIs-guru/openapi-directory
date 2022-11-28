import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStripeGatewayDeveloperDeveloperIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class GetStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStripeGatewayDeveloperDeveloperIdAccountsPathParams;
}


export class GetStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStripeGatewayDeveloperDeveloperIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" })
  redirectUrl: string;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStripeGatewayDeveloperDeveloperIdAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

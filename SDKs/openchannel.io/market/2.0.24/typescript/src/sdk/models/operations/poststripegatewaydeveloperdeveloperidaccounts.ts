import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStripeGatewayDeveloperDeveloperIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" })
  redirectUrl: string;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStripeGatewayDeveloperDeveloperIdAccountsPathParams;

  @Metadata()
  queryParams: PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams;
}


export class PostStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

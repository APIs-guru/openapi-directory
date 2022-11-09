import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCustomGatewayPaymentOwnershipIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostCustomGatewayPaymentOwnershipIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerAmount" })
  developerAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplaceAmount" })
  marketplaceAmount?: number;
}


export class PostCustomGatewayPaymentOwnershipIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCustomGatewayPaymentOwnershipIdPathParams;

  @Metadata()
  queryParams: PostCustomGatewayPaymentOwnershipIdQueryParams;
}


export class PostCustomGatewayPaymentOwnershipIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

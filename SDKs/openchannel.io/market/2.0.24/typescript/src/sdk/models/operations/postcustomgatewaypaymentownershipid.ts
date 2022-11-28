import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCustomGatewayPaymentOwnershipIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostCustomGatewayPaymentOwnershipIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerAmount" })
  developerAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplaceAmount" })
  marketplaceAmount?: number;
}


export class PostCustomGatewayPaymentOwnershipIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomGatewayPaymentOwnershipIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCustomGatewayPaymentOwnershipIdQueryParams;
}


export class PostCustomGatewayPaymentOwnershipIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

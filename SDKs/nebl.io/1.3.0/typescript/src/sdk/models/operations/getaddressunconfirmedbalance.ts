import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressUnconfirmedBalancePathParams;
}


export class GetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressUnconfirmedBalanceResponse?: number;
}

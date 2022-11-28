import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestnetGetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressUnconfirmedBalancePathParams;
}


export class TestnetGetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressUnconfirmedBalanceResponse?: number;
}

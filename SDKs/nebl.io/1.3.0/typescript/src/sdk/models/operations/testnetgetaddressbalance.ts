import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestnetGetAddressBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressBalancePathParams;
}


export class TestnetGetAddressBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressBalanceResponse?: number;
}

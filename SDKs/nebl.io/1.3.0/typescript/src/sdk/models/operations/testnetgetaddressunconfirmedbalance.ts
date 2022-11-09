import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestnetGetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressUnconfirmedBalancePathParams;
}


export class TestnetGetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressUnconfirmedBalanceResponse?: number;
}

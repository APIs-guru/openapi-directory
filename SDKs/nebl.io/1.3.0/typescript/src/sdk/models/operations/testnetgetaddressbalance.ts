import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestnetGetAddressBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressBalancePathParams;
}


export class TestnetGetAddressBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressBalanceResponse?: number;
}

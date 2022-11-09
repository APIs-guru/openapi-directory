import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetAddressInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressInfoPathParams;
}


export class TestnetGetAddressInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressInfoResponse?: shared.GetAddressInfoResponse;
}

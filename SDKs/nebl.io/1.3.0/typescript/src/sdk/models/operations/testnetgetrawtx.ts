import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetRawTxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class TestnetGetRawTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetRawTxPathParams;
}


export class TestnetGetRawTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRawTxResponse?: shared.GetRawTxResponse;
}

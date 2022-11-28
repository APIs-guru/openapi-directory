import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class TestnetGetTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTxPathParams;
}


export class TestnetGetTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTxResponse?: shared.GetTxResponse;
}

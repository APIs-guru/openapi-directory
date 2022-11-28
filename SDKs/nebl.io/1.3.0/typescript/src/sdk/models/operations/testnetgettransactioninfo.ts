import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTransactionInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class TestnetGetTransactionInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTransactionInfoPathParams;
}


export class TestnetGetTransactionInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}

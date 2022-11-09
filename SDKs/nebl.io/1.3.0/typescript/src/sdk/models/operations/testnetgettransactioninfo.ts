import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTransactionInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class TestnetGetTransactionInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTransactionInfoPathParams;
}


export class TestnetGetTransactionInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}

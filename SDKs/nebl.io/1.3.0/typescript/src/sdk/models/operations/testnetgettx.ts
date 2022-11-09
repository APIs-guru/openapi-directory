import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class TestnetGetTxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTxPathParams;
}


export class TestnetGetTxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTxResponse?: shared.GetTxResponse;
}

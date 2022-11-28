import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTxPathParams;
}


export class GetTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTxResponse?: shared.GetTxResponse;
}

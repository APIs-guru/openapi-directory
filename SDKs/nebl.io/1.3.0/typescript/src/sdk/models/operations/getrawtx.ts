import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRawTxPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetRawTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawTxPathParams;
}


export class GetRawTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRawTxResponse?: shared.GetRawTxResponse;
}

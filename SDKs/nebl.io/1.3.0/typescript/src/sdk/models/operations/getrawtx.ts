import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRawTxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetRawTxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawTxPathParams;
}


export class GetRawTxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRawTxResponse?: shared.GetRawTxResponse;
}

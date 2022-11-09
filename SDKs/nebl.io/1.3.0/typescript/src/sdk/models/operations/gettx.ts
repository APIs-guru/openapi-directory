import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTxPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetTxRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTxPathParams;
}


export class GetTxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTxResponse?: shared.GetTxResponse;
}

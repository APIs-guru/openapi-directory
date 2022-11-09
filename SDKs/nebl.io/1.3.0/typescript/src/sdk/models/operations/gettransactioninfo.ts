import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetTransactionInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionInfoPathParams;
}


export class GetTransactionInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}

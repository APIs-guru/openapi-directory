import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: string;
}


export class GetTransactionInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionInfoPathParams;
}


export class GetTransactionInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}

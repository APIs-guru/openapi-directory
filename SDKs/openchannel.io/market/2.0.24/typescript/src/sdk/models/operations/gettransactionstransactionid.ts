import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class GetTransactionsTransactionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsTransactionIdPathParams;
}


export class GetTransactionsTransactionIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

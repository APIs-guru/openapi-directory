import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class DeleteTransactionsTransactionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTransactionsTransactionIdPathParams;
}


export class DeleteTransactionsTransactionIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

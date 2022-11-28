import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class DeleteTransactionsTransactionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransactionsTransactionIdPathParams;
}


export class DeleteTransactionsTransactionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

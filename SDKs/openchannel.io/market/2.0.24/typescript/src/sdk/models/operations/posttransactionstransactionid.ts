import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class PostTransactionsTransactionIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;
}


export class PostTransactionsTransactionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTransactionsTransactionIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostTransactionsTransactionIdQueryParams;
}


export class PostTransactionsTransactionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

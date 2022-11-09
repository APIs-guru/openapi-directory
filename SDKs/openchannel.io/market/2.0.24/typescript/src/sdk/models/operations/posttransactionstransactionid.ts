import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class PostTransactionsTransactionIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;
}


export class PostTransactionsTransactionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTransactionsTransactionIdPathParams;

  @Metadata()
  queryParams: PostTransactionsTransactionIdQueryParams;
}


export class PostTransactionsTransactionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

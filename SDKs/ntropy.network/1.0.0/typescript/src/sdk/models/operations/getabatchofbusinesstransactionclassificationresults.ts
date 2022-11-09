import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetABatchOfBusinessTransactionClassificationResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetABatchOfBusinessTransactionClassificationResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetABatchOfBusinessTransactionClassificationResultsPathParams;
}


export class GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=merchant" })
  merchant?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}


export class GetABatchOfBusinessTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults })
  results?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetABatchOfBusinessTransactionClassificationResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getABatchOfBusinessTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJson;
}

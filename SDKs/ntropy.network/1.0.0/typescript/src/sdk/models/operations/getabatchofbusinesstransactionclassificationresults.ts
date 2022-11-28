import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetABatchOfBusinessTransactionClassificationResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class GetABatchOfBusinessTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults })
  results?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetABatchOfBusinessTransactionClassificationResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABatchOfBusinessTransactionClassificationResultsPathParams;
}


export class GetABatchOfBusinessTransactionClassificationResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABatchOfBusinessTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJson;
}

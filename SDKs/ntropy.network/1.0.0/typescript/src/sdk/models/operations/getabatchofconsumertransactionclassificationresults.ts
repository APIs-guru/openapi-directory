import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetABatchOfConsumerTransactionClassificationResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reviews" })
  reviews?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: string;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults })
  results?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetABatchOfConsumerTransactionClassificationResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABatchOfConsumerTransactionClassificationResultsPathParams;
}


export class GetABatchOfConsumerTransactionClassificationResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJson;
}

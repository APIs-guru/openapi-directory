import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetABatchOfConsumerTransactionClassificationResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetABatchOfConsumerTransactionClassificationResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetABatchOfConsumerTransactionClassificationResultsPathParams;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=reviews" })
  reviews?: number;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact" })
  contact?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=location" })
  location?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=merchant" })
  merchant?: string;

  @Metadata({ data: "json, name=person" })
  person?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}


export class GetABatchOfConsumerTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults })
  results?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetABatchOfConsumerTransactionClassificationResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJson;
}

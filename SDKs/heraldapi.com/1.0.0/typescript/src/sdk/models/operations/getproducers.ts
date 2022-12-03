import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProducersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;
}


export class GetProducers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=producers", elemType: shared.ProducerV1 })
  producers?: shared.ProducerV1[];
}


export class GetProducersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProducersQueryParams;
}


export class GetProducersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProducers200ApplicationJsonObject?: GetProducers200ApplicationJson;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersStatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;
}


export class GetConsumerV1CustomersStatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1CustomersStatesQueryParams;
}


export class GetConsumerV1CustomersStatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.StateViewModel })
  stateViewModels?: shared.StateViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}

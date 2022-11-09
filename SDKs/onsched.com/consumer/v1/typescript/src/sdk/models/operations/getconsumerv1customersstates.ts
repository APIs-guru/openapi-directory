import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersStatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;
}


export class GetConsumerV1CustomersStatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersStatesQueryParams;
}


export class GetConsumerV1CustomersStatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.StateViewModel })
  stateViewModels?: shared.StateViewModel[];

  @Metadata()
  statusCode: number;
}

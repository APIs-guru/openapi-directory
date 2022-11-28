import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersCustomfieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=leadQuestions" })
  leadQuestions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1CustomersCustomfieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1CustomersCustomfieldsQueryParams;
}


export class GetConsumerV1CustomersCustomfieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}

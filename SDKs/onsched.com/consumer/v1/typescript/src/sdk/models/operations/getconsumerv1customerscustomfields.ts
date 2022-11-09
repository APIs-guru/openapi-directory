import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersCustomfieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=leadQuestions" })
  leadQuestions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1CustomersCustomfieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersCustomfieldsQueryParams;
}


export class GetConsumerV1CustomersCustomfieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;

  @Metadata()
  statusCode: number;
}

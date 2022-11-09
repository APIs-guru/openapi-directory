import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1AppointmentsCustomfieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1AppointmentsCustomfieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1AppointmentsCustomfieldsQueryParams;
}


export class GetConsumerV1AppointmentsCustomfieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;

  @Metadata()
  statusCode: number;
}

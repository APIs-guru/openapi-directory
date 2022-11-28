import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1AppointmentsCustomfieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1AppointmentsCustomfieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1AppointmentsCustomfieldsQueryParams;
}


export class GetConsumerV1AppointmentsCustomfieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}

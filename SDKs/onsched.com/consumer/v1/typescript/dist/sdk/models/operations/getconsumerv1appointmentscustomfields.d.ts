import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AppointmentsCustomfieldsQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetConsumerV1AppointmentsCustomfieldsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1AppointmentsCustomfieldsQueryParams;
}
export declare class GetConsumerV1AppointmentsCustomfieldsResponse extends SpeakeasyBase {
    contentType: string;
    customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;
    statusCode: number;
}

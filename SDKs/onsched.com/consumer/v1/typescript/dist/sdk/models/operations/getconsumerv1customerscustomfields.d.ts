import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersCustomfieldsQueryParams extends SpeakeasyBase {
    leadQuestions?: boolean;
    locationId?: string;
}
export declare class GetConsumerV1CustomersCustomfieldsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1CustomersCustomfieldsQueryParams;
}
export declare class GetConsumerV1CustomersCustomfieldsResponse extends SpeakeasyBase {
    contentType: string;
    customFieldDefinitionListViewModel?: shared.CustomFieldDefinitionListViewModel;
    statusCode: number;
}

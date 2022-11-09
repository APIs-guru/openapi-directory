import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1LocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1LocationsIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1LocationsIdPathParams;
}
export declare class GetConsumerV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}

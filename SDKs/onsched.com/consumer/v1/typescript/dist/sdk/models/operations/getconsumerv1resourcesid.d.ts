import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1ResourcesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetConsumerV1ResourcesIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ResourcesIdPathParams;
}
export declare class GetConsumerV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}

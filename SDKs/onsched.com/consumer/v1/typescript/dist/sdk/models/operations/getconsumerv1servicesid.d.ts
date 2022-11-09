import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1ServicesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetConsumerV1ServicesIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ServicesIdPathParams;
}
export declare class GetConsumerV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}

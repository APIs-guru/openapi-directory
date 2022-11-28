import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1ServicegroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetConsumerV1ServicegroupsIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ServicegroupsIdPathParams;
}
export declare class GetConsumerV1ServicegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceGroupViewModel?: shared.ServiceGroupViewModel;
    statusCode: number;
}

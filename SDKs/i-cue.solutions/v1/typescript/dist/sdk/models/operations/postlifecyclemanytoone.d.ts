import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLifecycleManyToOneHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostLifecycleManyToOneRequests extends SpeakeasyBase {
    lifecycleManyToOneRequest?: shared.LifecycleManyToOneRequest;
    lifecycleManyToOneRequest1?: shared.LifecycleManyToOneRequest;
    lifecycleManyToOneRequest2?: shared.LifecycleManyToOneRequest;
}
export declare class PostLifecycleManyToOneRequest extends SpeakeasyBase {
    headers: PostLifecycleManyToOneHeaders;
    request?: PostLifecycleManyToOneRequests;
}
export declare class PostLifecycleManyToOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    planningLevelDataDto?: shared.PlanningLevelDataDto;
    statusCode: number;
}

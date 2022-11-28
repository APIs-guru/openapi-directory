import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLifecycleOneToOneHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostLifecycleOneToOneRequests extends SpeakeasyBase {
    lifecycleOneToOneRequest?: shared.LifecycleOneToOneRequest;
    lifecycleOneToOneRequest1?: shared.LifecycleOneToOneRequest;
    lifecycleOneToOneRequest2?: shared.LifecycleOneToOneRequest;
}
export declare class PostLifecycleOneToOneRequest extends SpeakeasyBase {
    headers: PostLifecycleOneToOneHeaders;
    request?: PostLifecycleOneToOneRequests;
}
export declare class PostLifecycleOneToOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    planningLevelDataDto?: shared.PlanningLevelDataDto;
    statusCode: number;
}

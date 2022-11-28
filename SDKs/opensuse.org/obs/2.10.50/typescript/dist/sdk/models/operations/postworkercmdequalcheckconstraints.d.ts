import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkerCmdEqualCheckconstraintsQueryParams extends SpeakeasyBase {
    arch: string;
    package: string;
    project: string;
    repository: string;
}
export declare class PostWorkerCmdEqualCheckconstraintsSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostWorkerCmdEqualCheckconstraintsRequest extends SpeakeasyBase {
    queryParams: PostWorkerCmdEqualCheckconstraintsQueryParams;
    request: Uint8Array;
    security: PostWorkerCmdEqualCheckconstraintsSecurity;
}
export declare class PostWorkerCmdEqualCheckconstraintsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

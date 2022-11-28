import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExportsPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class GetExportsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetExportsRequest extends SpeakeasyBase {
    pathParams: GetExportsPathParams;
    headers: GetExportsHeaders;
}
export declare class GetExportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    exports?: shared.Export[];
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    headers: GetProjectsHeaders;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    projects?: shared.Project[];
    statusCode: number;
}

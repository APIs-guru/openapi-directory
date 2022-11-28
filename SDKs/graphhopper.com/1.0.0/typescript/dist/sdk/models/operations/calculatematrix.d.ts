import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalculateMatrixRequest extends SpeakeasyBase {
    request?: any;
}
export declare class CalculateMatrixResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    jobId?: shared.JobId;
    statusCode: number;
}

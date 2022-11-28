import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMatrixRequest extends SpeakeasyBase {
    request?: any;
}
export declare class PostMatrixResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
}

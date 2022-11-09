import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResultsReadPathParams extends SpeakeasyBase {
    resultFileId: string;
}
export declare class ResultsReadRequest extends SpeakeasyBase {
    pathParams: ResultsReadPathParams;
}
export declare class ResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    resultResponse?: shared.ResultResponse;
    statusCode: number;
}

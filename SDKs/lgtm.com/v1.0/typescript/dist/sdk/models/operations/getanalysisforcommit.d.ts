import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalysisForCommitPathParams extends SpeakeasyBase {
    commitId: string;
    projectId: number;
}
export declare class GetAnalysisForCommitSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetAnalysisForCommitRequest extends SpeakeasyBase {
    pathParams: GetAnalysisForCommitPathParams;
    security: GetAnalysisForCommitSecurity;
}
export declare class GetAnalysisForCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    analysis?: shared.Analysis;
}

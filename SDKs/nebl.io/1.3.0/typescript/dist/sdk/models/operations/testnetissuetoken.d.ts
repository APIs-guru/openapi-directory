import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetIssueTokenRequest extends SpeakeasyBase {
    request: shared.IssueTokenRequest;
}
export declare class TestnetIssueTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    issueTokenResponse?: shared.IssueTokenResponse;
}

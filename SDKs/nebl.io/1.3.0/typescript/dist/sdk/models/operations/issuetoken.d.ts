import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssueTokenRequest extends SpeakeasyBase {
    request: shared.IssueTokenRequest;
}
export declare class IssueTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    issueTokenResponse?: shared.IssueTokenResponse;
}

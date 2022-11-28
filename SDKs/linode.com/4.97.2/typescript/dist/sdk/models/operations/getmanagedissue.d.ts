import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedIssuePathParams extends SpeakeasyBase {
    issueId: number;
}
export declare class GetManagedIssueSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedIssueDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedIssueRequest extends SpeakeasyBase {
    pathParams: GetManagedIssuePathParams;
    security: GetManagedIssueSecurity;
}
export declare class GetManagedIssueResponse extends SpeakeasyBase {
    contentType: string;
    managedIssue?: shared.ManagedIssue;
    statusCode: number;
    getManagedIssueDefaultApplicationJsonObject?: GetManagedIssueDefaultApplicationJson;
}

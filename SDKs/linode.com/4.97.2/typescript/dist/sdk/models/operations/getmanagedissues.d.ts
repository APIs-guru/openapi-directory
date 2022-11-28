import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedIssuesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetManagedIssuesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedIssues200ApplicationJson extends SpeakeasyBase {
    data?: shared.ManagedIssue[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetManagedIssuesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedIssuesRequest extends SpeakeasyBase {
    queryParams: GetManagedIssuesQueryParams;
    security: GetManagedIssuesSecurity;
}
export declare class GetManagedIssuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedIssues200ApplicationJsonObject?: GetManagedIssues200ApplicationJson;
    getManagedIssuesDefaultApplicationJsonObject?: GetManagedIssuesDefaultApplicationJson;
}

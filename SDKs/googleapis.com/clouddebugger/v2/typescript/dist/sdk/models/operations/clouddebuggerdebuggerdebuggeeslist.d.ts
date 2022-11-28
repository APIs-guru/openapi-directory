import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerDebuggerDebuggeesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientVersion?: string;
    fields?: string;
    includeInactive?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    project?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesListSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesListSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesListSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesListRequest extends SpeakeasyBase {
    queryParams: ClouddebuggerDebuggerDebuggeesListQueryParams;
    security: ClouddebuggerDebuggerDebuggeesListSecurity;
}
export declare class ClouddebuggerDebuggerDebuggeesListResponse extends SpeakeasyBase {
    contentType: string;
    listDebuggeesResponse?: shared.ListDebuggeesResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesCommentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsupportCasesCommentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsupportCasesCommentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesCommentsCreateRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesCommentsCreatePathParams;
    queryParams: CloudsupportCasesCommentsCreateQueryParams;
    request?: shared.CommentInput;
    security: CloudsupportCasesCommentsCreateSecurity;
}
export declare class CloudsupportCasesCommentsCreateResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}

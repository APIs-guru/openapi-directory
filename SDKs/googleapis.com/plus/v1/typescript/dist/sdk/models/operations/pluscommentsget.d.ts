import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlusCommentsGetPathParams extends SpeakeasyBase {
    commentId: string;
}
export declare class PlusCommentsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusCommentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusCommentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusCommentsGetSecurity extends SpeakeasyBase {
    option1?: PlusCommentsGetSecurityOption1;
    option2?: PlusCommentsGetSecurityOption2;
}
export declare class PlusCommentsGetRequest extends SpeakeasyBase {
    pathParams: PlusCommentsGetPathParams;
    queryParams: PlusCommentsGetQueryParams;
    security: PlusCommentsGetSecurity;
}
export declare class PlusCommentsGetResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesCommentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsupportCasesCommentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsupportCasesCommentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesCommentsListRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesCommentsListPathParams;
    queryParams: CloudsupportCasesCommentsListQueryParams;
    security: CloudsupportCasesCommentsListSecurity;
}
export declare class CloudsupportCasesCommentsListResponse extends SpeakeasyBase {
    contentType: string;
    listCommentsResponse?: shared.ListCommentsResponse;
    statusCode: number;
}

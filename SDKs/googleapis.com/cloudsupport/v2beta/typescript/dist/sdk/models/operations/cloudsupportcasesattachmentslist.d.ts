import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesAttachmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsupportCasesAttachmentsListQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportCasesAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesAttachmentsListRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesAttachmentsListPathParams;
    queryParams: CloudsupportCasesAttachmentsListQueryParams;
    security: CloudsupportCasesAttachmentsListSecurity;
}
export declare class CloudsupportCasesAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listAttachmentsResponse?: shared.ListAttachmentsResponse;
    statusCode: number;
}

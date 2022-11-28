import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsupportCasesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsupportCasesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesListRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesListPathParams;
    queryParams: CloudsupportCasesListQueryParams;
    security: CloudsupportCasesListSecurity;
}
export declare class CloudsupportCasesListResponse extends SpeakeasyBase {
    contentType: string;
    listCasesResponse?: shared.ListCasesResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsOperationsListSecurityOption1;
    option2?: DialogflowProjectsOperationsListSecurityOption2;
}
export declare class DialogflowProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsOperationsListPathParams;
    queryParams: DialogflowProjectsOperationsListQueryParams;
    security: DialogflowProjectsOperationsListSecurity;
}
export declare class DialogflowProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}

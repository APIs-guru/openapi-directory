import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsGetSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsOperationsGetSecurityOption1;
    option2?: DialogflowProjectsOperationsGetSecurityOption2;
}
export declare class DialogflowProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsOperationsGetPathParams;
    queryParams: DialogflowProjectsOperationsGetQueryParams;
    security: DialogflowProjectsOperationsGetSecurity;
}
export declare class DialogflowProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

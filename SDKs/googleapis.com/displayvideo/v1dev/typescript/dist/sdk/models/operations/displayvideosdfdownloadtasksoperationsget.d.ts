import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisplayvideoSdfdownloadtasksOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DisplayvideoSdfdownloadtasksOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoSdfdownloadtasksOperationsGetSecurity extends SpeakeasyBase {
    option1?: DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
    option2?: DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;
}
export declare class DisplayvideoSdfdownloadtasksOperationsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoSdfdownloadtasksOperationsGetPathParams;
    queryParams: DisplayvideoSdfdownloadtasksOperationsGetQueryParams;
    security: DisplayvideoSdfdownloadtasksOperationsGetSecurity;
}
export declare class DisplayvideoSdfdownloadtasksOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SlidesPresentationsGetPathParams extends SpeakeasyBase {
    presentationId: string;
}
export declare class SlidesPresentationsGetQueryParams extends SpeakeasyBase {
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
export declare class SlidesPresentationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsGetSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsGetSecurityOption1;
    option2?: SlidesPresentationsGetSecurityOption2;
    option3?: SlidesPresentationsGetSecurityOption3;
    option4?: SlidesPresentationsGetSecurityOption4;
    option5?: SlidesPresentationsGetSecurityOption5;
}
export declare class SlidesPresentationsGetRequest extends SpeakeasyBase {
    pathParams: SlidesPresentationsGetPathParams;
    queryParams: SlidesPresentationsGetQueryParams;
    security: SlidesPresentationsGetSecurity;
}
export declare class SlidesPresentationsGetResponse extends SpeakeasyBase {
    contentType: string;
    presentation?: shared.Presentation;
    statusCode: number;
}

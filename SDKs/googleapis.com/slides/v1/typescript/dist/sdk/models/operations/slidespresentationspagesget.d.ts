import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SlidesPresentationsPagesGetPathParams extends SpeakeasyBase {
    pageObjectId: string;
    presentationId: string;
}
export declare class SlidesPresentationsPagesGetQueryParams extends SpeakeasyBase {
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
export declare class SlidesPresentationsPagesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsPagesGetSecurityOption1;
    option2?: SlidesPresentationsPagesGetSecurityOption2;
    option3?: SlidesPresentationsPagesGetSecurityOption3;
    option4?: SlidesPresentationsPagesGetSecurityOption4;
    option5?: SlidesPresentationsPagesGetSecurityOption5;
}
export declare class SlidesPresentationsPagesGetRequest extends SpeakeasyBase {
    pathParams: SlidesPresentationsPagesGetPathParams;
    queryParams: SlidesPresentationsPagesGetQueryParams;
    security: SlidesPresentationsPagesGetSecurity;
}
export declare class SlidesPresentationsPagesGetResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}

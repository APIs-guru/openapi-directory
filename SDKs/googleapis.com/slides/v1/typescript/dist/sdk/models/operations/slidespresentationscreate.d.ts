import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SlidesPresentationsCreateQueryParams extends SpeakeasyBase {
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
export declare class SlidesPresentationsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsCreateSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsCreateSecurityOption1;
    option2?: SlidesPresentationsCreateSecurityOption2;
    option3?: SlidesPresentationsCreateSecurityOption3;
}
export declare class SlidesPresentationsCreateRequest extends SpeakeasyBase {
    queryParams: SlidesPresentationsCreateQueryParams;
    request?: shared.Presentation;
    security: SlidesPresentationsCreateSecurity;
}
export declare class SlidesPresentationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    presentation?: shared.Presentation;
    statusCode: number;
}

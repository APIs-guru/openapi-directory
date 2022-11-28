import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SlidesPresentationsBatchUpdatePathParams extends SpeakeasyBase {
    presentationId: string;
}
export declare class SlidesPresentationsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class SlidesPresentationsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsBatchUpdateSecurityOption1;
    option2?: SlidesPresentationsBatchUpdateSecurityOption2;
    option3?: SlidesPresentationsBatchUpdateSecurityOption3;
    option4?: SlidesPresentationsBatchUpdateSecurityOption4;
    option5?: SlidesPresentationsBatchUpdateSecurityOption5;
    option6?: SlidesPresentationsBatchUpdateSecurityOption6;
}
export declare class SlidesPresentationsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: SlidesPresentationsBatchUpdatePathParams;
    queryParams: SlidesPresentationsBatchUpdateQueryParams;
    request?: shared.BatchUpdatePresentationRequest;
    security: SlidesPresentationsBatchUpdateSecurity;
}
export declare class SlidesPresentationsBatchUpdateResponse extends SpeakeasyBase {
    batchUpdatePresentationResponse?: shared.BatchUpdatePresentationResponse;
    contentType: string;
    statusCode: number;
}

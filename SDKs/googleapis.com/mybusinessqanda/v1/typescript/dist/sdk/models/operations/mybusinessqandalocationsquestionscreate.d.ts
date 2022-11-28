import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessqandaLocationsQuestionsCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessqandaLocationsQuestionsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsCreatePathParams;
    queryParams: MybusinessqandaLocationsQuestionsCreateQueryParams;
    request?: shared.QuestionInput;
}
export declare class MybusinessqandaLocationsQuestionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    question?: shared.Question;
    statusCode: number;
}

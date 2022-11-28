import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessqandaLocationsQuestionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessqandaLocationsQuestionsPatchRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsPatchPathParams;
    queryParams: MybusinessqandaLocationsQuestionsPatchQueryParams;
    request?: shared.QuestionInput;
}
export declare class MybusinessqandaLocationsQuestionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    question?: shared.Question;
    statusCode: number;
}

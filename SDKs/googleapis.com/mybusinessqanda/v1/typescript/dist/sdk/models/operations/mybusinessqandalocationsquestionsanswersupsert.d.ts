import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsAnswersUpsertPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams extends SpeakeasyBase {
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
export declare class MybusinessqandaLocationsQuestionsAnswersUpsertRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsAnswersUpsertPathParams;
    queryParams: MybusinessqandaLocationsQuestionsAnswersUpsertQueryParams;
    request?: shared.UpsertAnswerRequest;
}
export declare class MybusinessqandaLocationsQuestionsAnswersUpsertResponse extends SpeakeasyBase {
    answer?: shared.Answer;
    contentType: string;
    statusCode: number;
}

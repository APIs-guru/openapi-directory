import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsAnswersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessqandaLocationsQuestionsAnswersDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsAnswersDeletePathParams;
    queryParams: MybusinessqandaLocationsQuestionsAnswersDeleteQueryParams;
}
export declare class MybusinessqandaLocationsQuestionsAnswersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

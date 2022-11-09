import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsAnswersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessqandaLocationsQuestionsAnswersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessqandaLocationsQuestionsAnswersListRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsAnswersListPathParams;
    queryParams: MybusinessqandaLocationsQuestionsAnswersListQueryParams;
}
export declare class MybusinessqandaLocationsQuestionsAnswersListResponse extends SpeakeasyBase {
    contentType: string;
    listAnswersResponse?: shared.ListAnswersResponse;
    statusCode: number;
}

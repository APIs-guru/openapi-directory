import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessqandaLocationsQuestionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    answersPerQuestion?: number;
    callback?: string;
    fields?: string;
    filter?: string;
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
export declare class MybusinessqandaLocationsQuestionsListRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsListPathParams;
    queryParams: MybusinessqandaLocationsQuestionsListQueryParams;
}
export declare class MybusinessqandaLocationsQuestionsListResponse extends SpeakeasyBase {
    contentType: string;
    listQuestionsResponse?: shared.ListQuestionsResponse;
    statusCode: number;
}

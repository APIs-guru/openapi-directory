import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessqandaLocationsQuestionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessqandaLocationsQuestionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessqandaLocationsQuestionsDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessqandaLocationsQuestionsDeletePathParams;
    queryParams: MybusinessqandaLocationsQuestionsDeleteQueryParams;
}
export declare class MybusinessqandaLocationsQuestionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

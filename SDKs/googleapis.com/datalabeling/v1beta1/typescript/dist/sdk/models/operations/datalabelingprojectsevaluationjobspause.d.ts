import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationJobsPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsEvaluationJobsPauseQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsEvaluationJobsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationJobsPauseRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationJobsPausePathParams;
    queryParams: DatalabelingProjectsEvaluationJobsPauseQueryParams;
    request?: Map<string, any>;
    security: DatalabelingProjectsEvaluationJobsPauseSecurity;
}
export declare class DatalabelingProjectsEvaluationJobsPauseResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}

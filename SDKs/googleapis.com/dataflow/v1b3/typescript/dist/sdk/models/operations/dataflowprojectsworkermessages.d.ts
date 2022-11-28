import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsWorkerMessagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DataflowProjectsWorkerMessagesQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsWorkerMessagesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsWorkerMessagesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsWorkerMessagesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsWorkerMessagesSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsWorkerMessagesSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsWorkerMessagesSecurityOption1;
    option2?: DataflowProjectsWorkerMessagesSecurityOption2;
    option3?: DataflowProjectsWorkerMessagesSecurityOption3;
    option4?: DataflowProjectsWorkerMessagesSecurityOption4;
}
export declare class DataflowProjectsWorkerMessagesRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsWorkerMessagesPathParams;
    queryParams: DataflowProjectsWorkerMessagesQueryParams;
    request?: shared.SendWorkerMessagesRequest;
    security: DataflowProjectsWorkerMessagesSecurity;
}
export declare class DataflowProjectsWorkerMessagesResponse extends SpeakeasyBase {
    contentType: string;
    sendWorkerMessagesResponse?: shared.SendWorkerMessagesResponse;
    statusCode: number;
}

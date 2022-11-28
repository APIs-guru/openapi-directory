import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsWorkerMessagesPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsWorkerMessagesQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsWorkerMessagesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsWorkerMessagesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsWorkerMessagesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsWorkerMessagesSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsWorkerMessagesSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsWorkerMessagesSecurityOption1;
    option2?: DataflowProjectsLocationsWorkerMessagesSecurityOption2;
    option3?: DataflowProjectsLocationsWorkerMessagesSecurityOption3;
    option4?: DataflowProjectsLocationsWorkerMessagesSecurityOption4;
}
export declare class DataflowProjectsLocationsWorkerMessagesRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsWorkerMessagesPathParams;
    queryParams: DataflowProjectsLocationsWorkerMessagesQueryParams;
    request?: shared.SendWorkerMessagesRequest;
    security: DataflowProjectsLocationsWorkerMessagesSecurity;
}
export declare class DataflowProjectsLocationsWorkerMessagesResponse extends SpeakeasyBase {
    contentType: string;
    sendWorkerMessagesResponse?: shared.SendWorkerMessagesResponse;
    statusCode: number;
}

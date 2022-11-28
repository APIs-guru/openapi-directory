import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAnswerRecordsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAnswerRecordsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAnswerRecordsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAnswerRecordsListPathParams;
    queryParams: DialogflowProjectsLocationsAnswerRecordsListQueryParams;
    security: DialogflowProjectsLocationsAnswerRecordsListSecurity;
}
export declare class DialogflowProjectsLocationsAnswerRecordsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListAnswerRecordsResponse?: shared.GoogleCloudDialogflowV2ListAnswerRecordsResponse;
    statusCode: number;
}

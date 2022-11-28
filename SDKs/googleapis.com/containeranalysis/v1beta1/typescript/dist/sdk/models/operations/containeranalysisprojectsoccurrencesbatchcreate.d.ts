import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsOccurrencesBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOccurrencesBatchCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesBatchCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesBatchCreatePathParams;
    queryParams: ContaineranalysisProjectsOccurrencesBatchCreateQueryParams;
    request?: shared.BatchCreateOccurrencesRequestInput;
    security: ContaineranalysisProjectsOccurrencesBatchCreateSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesBatchCreateResponse extends SpeakeasyBase {
    batchCreateOccurrencesResponse?: shared.BatchCreateOccurrencesResponse;
    contentType: string;
    statusCode: number;
}

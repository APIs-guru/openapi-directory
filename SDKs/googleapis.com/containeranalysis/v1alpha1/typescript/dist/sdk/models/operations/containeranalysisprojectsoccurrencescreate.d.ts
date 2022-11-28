import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsOccurrencesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProjectsOccurrencesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesCreatePathParams;
    queryParams: ContaineranalysisProjectsOccurrencesCreateQueryParams;
    request?: shared.OccurrenceInput;
    security: ContaineranalysisProjectsOccurrencesCreateSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesCreateResponse extends SpeakeasyBase {
    contentType: string;
    occurrence?: shared.Occurrence;
    statusCode: number;
}

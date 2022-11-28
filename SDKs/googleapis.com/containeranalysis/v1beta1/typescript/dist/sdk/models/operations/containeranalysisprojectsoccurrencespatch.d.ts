import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProjectsOccurrencesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProjectsOccurrencesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesPatchRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesPatchPathParams;
    queryParams: ContaineranalysisProjectsOccurrencesPatchQueryParams;
    request?: shared.OccurrenceInput;
    security: ContaineranalysisProjectsOccurrencesPatchSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesPatchResponse extends SpeakeasyBase {
    contentType: string;
    occurrence?: shared.Occurrence;
    statusCode: number;
}

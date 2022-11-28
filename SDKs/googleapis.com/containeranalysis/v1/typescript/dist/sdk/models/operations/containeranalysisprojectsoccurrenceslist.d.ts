import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsOccurrencesListQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOccurrencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesListRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesListPathParams;
    queryParams: ContaineranalysisProjectsOccurrencesListQueryParams;
    security: ContaineranalysisProjectsOccurrencesListSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesListResponse extends SpeakeasyBase {
    contentType: string;
    listOccurrencesResponse?: shared.ListOccurrencesResponse;
    statusCode: number;
}

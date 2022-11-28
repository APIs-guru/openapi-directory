import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProvidersNotesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProvidersNotesListQueryParams extends SpeakeasyBase {
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
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProvidersNotesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProvidersNotesListRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProvidersNotesListPathParams;
    queryParams: ContaineranalysisProvidersNotesListQueryParams;
    security: ContaineranalysisProvidersNotesListSecurity;
}
export declare class ContaineranalysisProvidersNotesListResponse extends SpeakeasyBase {
    contentType: string;
    listNotesResponse?: shared.ListNotesResponse;
    statusCode: number;
}

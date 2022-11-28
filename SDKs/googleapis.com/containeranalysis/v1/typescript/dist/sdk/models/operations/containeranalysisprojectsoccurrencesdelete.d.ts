import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContaineranalysisProjectsOccurrencesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOccurrencesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesDeleteRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesDeletePathParams;
    queryParams: ContaineranalysisProjectsOccurrencesDeleteQueryParams;
    security: ContaineranalysisProjectsOccurrencesDeleteSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

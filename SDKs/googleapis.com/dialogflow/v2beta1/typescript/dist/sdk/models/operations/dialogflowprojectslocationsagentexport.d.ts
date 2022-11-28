import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentExportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentExportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentExportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentExportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentExportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentExportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentExportPathParams;
    queryParams: DialogflowProjectsLocationsAgentExportQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1ExportAgentRequest;
    security: DialogflowProjectsLocationsAgentExportSecurity;
}
export declare class DialogflowProjectsLocationsAgentExportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

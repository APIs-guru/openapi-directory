import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsExportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsExportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsExportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsExportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsExportPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsExportQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1ExportFlowRequest;
    security: DialogflowProjectsLocationsAgentsFlowsExportSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsExportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

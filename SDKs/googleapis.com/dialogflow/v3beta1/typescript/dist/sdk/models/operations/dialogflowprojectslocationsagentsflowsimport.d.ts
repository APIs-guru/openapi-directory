import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsImportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsImportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsImportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsImportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsImportPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsImportQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1ImportFlowRequest;
    security: DialogflowProjectsLocationsAgentsFlowsImportSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

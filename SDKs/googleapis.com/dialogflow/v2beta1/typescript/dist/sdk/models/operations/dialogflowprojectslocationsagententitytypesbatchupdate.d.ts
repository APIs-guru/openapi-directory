import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams;
    queryParams: DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest;
    security: DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

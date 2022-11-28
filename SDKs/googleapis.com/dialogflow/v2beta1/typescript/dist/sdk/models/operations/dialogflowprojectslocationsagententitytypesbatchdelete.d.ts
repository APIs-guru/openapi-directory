import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams;
    queryParams: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
    security: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

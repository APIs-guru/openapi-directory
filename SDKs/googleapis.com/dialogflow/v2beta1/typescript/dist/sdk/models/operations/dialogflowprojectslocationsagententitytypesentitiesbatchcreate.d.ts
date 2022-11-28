import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest;
    security: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams;
    queryParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest;
    security: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

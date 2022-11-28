import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams;
    queryParams: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams;
    request?: shared.GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
    security: DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity;
}
export declare class DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

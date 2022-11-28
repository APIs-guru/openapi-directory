import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsIntentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsIntentsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsIntentsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3Intent;
    security: DialogflowProjectsLocationsAgentsIntentsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsIntentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3Intent?: shared.GoogleCloudDialogflowCxV3Intent;
    statusCode: number;
}

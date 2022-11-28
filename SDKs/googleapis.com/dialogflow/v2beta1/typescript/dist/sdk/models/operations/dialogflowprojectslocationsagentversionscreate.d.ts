import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentVersionsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentVersionsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentVersionsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentVersionsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1VersionInput;
    security: DialogflowProjectsLocationsAgentVersionsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1Version?: shared.GoogleCloudDialogflowV2beta1Version;
    statusCode: number;
}

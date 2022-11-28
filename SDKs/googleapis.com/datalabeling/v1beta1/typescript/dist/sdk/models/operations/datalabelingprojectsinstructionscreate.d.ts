import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsInstructionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsInstructionsCreateQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsInstructionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsInstructionsCreateRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsInstructionsCreatePathParams;
    queryParams: DatalabelingProjectsInstructionsCreateQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1CreateInstructionRequest;
    security: DatalabelingProjectsInstructionsCreateSecurity;
}
export declare class DatalabelingProjectsInstructionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

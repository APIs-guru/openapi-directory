import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsMovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerProjectsMoveQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsMoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsMoveRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsMovePathParams;
    queryParams: CloudresourcemanagerProjectsMoveQueryParams;
    request?: shared.MoveProjectRequest;
    security: CloudresourcemanagerProjectsMoveSecurity;
}
export declare class CloudresourcemanagerProjectsMoveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetProjectConfigPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class SetProjectConfigSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class SetProjectConfigRequest extends SpeakeasyBase {
    pathParams: SetProjectConfigPathParams;
    request: string;
    security: SetProjectConfigSecurity;
}
export declare class SetProjectConfigResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

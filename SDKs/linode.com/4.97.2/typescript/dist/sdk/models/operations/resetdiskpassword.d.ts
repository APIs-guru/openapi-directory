import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetDiskPasswordPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class ResetDiskPasswordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResetDiskPasswordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResetDiskPasswordRequest extends SpeakeasyBase {
    pathParams: ResetDiskPasswordPathParams;
    request: any;
    security: ResetDiskPasswordSecurity;
}
export declare class ResetDiskPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resetDiskPassword200ApplicationJsonObject?: Map<string, any>;
    resetDiskPasswordDefaultApplicationJsonObject?: ResetDiskPasswordDefaultApplicationJson;
}

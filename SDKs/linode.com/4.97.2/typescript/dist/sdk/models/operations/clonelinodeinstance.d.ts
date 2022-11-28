import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class CloneLinodeInstanceRequestBody extends SpeakeasyBase {
    backupsEnabled?: boolean;
    configs?: number[];
    disks?: number[];
    group?: string;
    label?: string;
    linodeId?: number;
    region: string;
    type: string;
}
export declare class CloneLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CloneLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CloneLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: CloneLinodeInstancePathParams;
    request: CloneLinodeInstanceRequestBody;
    security: CloneLinodeInstanceSecurity;
}
export declare class CloneLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    linode?: shared.Linode;
    statusCode: number;
    cloneLinodeInstanceDefaultApplicationJsonObject?: CloneLinodeInstanceDefaultApplicationJson;
}

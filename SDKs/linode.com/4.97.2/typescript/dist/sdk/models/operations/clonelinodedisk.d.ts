import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneLinodeDiskPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class CloneLinodeDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CloneLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CloneLinodeDiskRequest extends SpeakeasyBase {
    pathParams: CloneLinodeDiskPathParams;
    security: CloneLinodeDiskSecurity;
}
export declare class CloneLinodeDiskResponse extends SpeakeasyBase {
    contentType: string;
    disk?: shared.Disk;
    statusCode: number;
    cloneLinodeDiskDefaultApplicationJsonObject?: CloneLinodeDiskDefaultApplicationJson;
}

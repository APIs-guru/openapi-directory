import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackupsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetBackupsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetBackups200ApplicationJsonAutomaticDisks extends SpeakeasyBase {
    filesystem?: shared.FilesystemEnum;
    label?: string;
    size?: number;
}
export declare enum GetBackups200ApplicationJsonAutomaticStatusEnum {
    Paused = "paused",
    Pending = "pending",
    Running = "running",
    NeedsPostProcessing = "needsPostProcessing",
    Successful = "successful",
    Failed = "failed",
    UserAborted = "userAborted"
}
export declare class GetBackups200ApplicationJsonAutomatic extends SpeakeasyBase {
    configs?: string[];
    created?: Date;
    disks?: GetBackups200ApplicationJsonAutomaticDisks[];
    finished?: Date;
    id?: number;
    label?: string;
    status?: GetBackups200ApplicationJsonAutomaticStatusEnum;
    type?: string;
    updated?: Date;
}
export declare class GetBackups200ApplicationJsonSnapshot extends SpeakeasyBase {
    current?: shared.Backup;
    inProgress?: shared.Backup;
}
export declare class GetBackups200ApplicationJson extends SpeakeasyBase {
    automatic?: GetBackups200ApplicationJsonAutomatic[];
    snapshot?: GetBackups200ApplicationJsonSnapshot;
}
export declare class GetBackupsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetBackupsRequest extends SpeakeasyBase {
    pathParams: GetBackupsPathParams;
    security: GetBackupsSecurity;
}
export declare class GetBackupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBackups200ApplicationJsonObject?: GetBackups200ApplicationJson;
    getBackupsDefaultApplicationJsonObject?: GetBackupsDefaultApplicationJson;
}

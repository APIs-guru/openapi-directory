import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDiskPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class DeleteDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteDiskRequest extends SpeakeasyBase {
    pathParams: DeleteDiskPathParams;
    security: DeleteDiskSecurity;
}
export declare class DeleteDiskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteDisk200ApplicationJsonObject?: Map<string, any>;
    deleteDiskDefaultApplicationJsonObject?: DeleteDiskDefaultApplicationJson;
}

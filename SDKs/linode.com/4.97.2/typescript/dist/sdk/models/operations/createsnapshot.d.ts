import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSnapshotPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class CreateSnapshotRequestBody extends SpeakeasyBase {
    label: string;
}
export declare class CreateSnapshotSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateSnapshotDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    pathParams: CreateSnapshotPathParams;
    request: CreateSnapshotRequestBody;
    security: CreateSnapshotSecurity;
}
export declare class CreateSnapshotResponse extends SpeakeasyBase {
    backup?: shared.Backup;
    contentType: string;
    statusCode: number;
    createSnapshotDefaultApplicationJsonObject?: CreateSnapshotDefaultApplicationJson;
}

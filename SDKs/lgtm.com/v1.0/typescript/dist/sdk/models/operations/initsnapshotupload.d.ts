import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitSnapshotUploadPathParams extends SpeakeasyBase {
    language: string;
    projectId: number;
}
export declare class InitSnapshotUploadQueryParams extends SpeakeasyBase {
    commit: string;
    date?: Date;
}
export declare class InitSnapshotUploadSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class InitSnapshotUploadRequest extends SpeakeasyBase {
    pathParams: InitSnapshotUploadPathParams;
    queryParams: InitSnapshotUploadQueryParams;
    security: InitSnapshotUploadSecurity;
}
export declare class InitSnapshotUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadSession?: shared.UploadSession;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDrivesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDrivesRequest extends SpeakeasyBase {
    security: GetDrivesSecurity;
}
export declare class GetDrivesResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemEntryInfos?: shared.FileSystemEntryInfo[];
    statusCode: number;
}

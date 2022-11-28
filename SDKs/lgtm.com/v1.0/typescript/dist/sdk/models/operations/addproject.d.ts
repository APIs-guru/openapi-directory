import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddProjectModeEnum {
    Full = "full",
    Sparse = "sparse",
    Upload = "upload"
}
export declare class AddProjectQueryParams extends SpeakeasyBase {
    commit?: string;
    date?: Date;
    language?: string[];
    mode?: AddProjectModeEnum;
    repository: string;
    workerLabel?: string[];
}
export declare class AddProjectSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class AddProjectRequest extends SpeakeasyBase {
    queryParams: AddProjectQueryParams;
    request?: string;
    security: AddProjectSecurity;
}
export declare class AddProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}

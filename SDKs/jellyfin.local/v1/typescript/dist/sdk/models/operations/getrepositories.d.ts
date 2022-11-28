import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRepositoriesRequest extends SpeakeasyBase {
    security: GetRepositoriesSecurity;
}
export declare class GetRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    repositoryInfos?: shared.RepositoryInfo[];
    statusCode: number;
}

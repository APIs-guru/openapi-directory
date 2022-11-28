import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetRepositoriesRequests extends SpeakeasyBase {
    repositoryInfos?: shared.RepositoryInfo[];
    repositoryInfos1?: shared.RepositoryInfo[];
    repositoryInfos2?: shared.RepositoryInfo[];
}
export declare class SetRepositoriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetRepositoriesRequest extends SpeakeasyBase {
    request?: SetRepositoriesRequests;
    security: SetRepositoriesSecurity;
}
export declare class SetRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

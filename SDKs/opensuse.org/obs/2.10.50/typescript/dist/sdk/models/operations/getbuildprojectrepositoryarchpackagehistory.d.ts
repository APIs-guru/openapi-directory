import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectRepositoryArchPackageHistoryPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectRepositoryArchPackageHistorySecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectRepositoryArchPackageHistoryRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectRepositoryArchPackageHistoryPathParams;
    security: GetBuildProjectRepositoryArchPackageHistorySecurity;
}
export declare class GetBuildProjectRepositoryArchPackageHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

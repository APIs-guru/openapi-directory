import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusPathParams extends SpeakeasyBase {
    architectureName: string;
    packageName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusPathParams;
    security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusSecurity;
}
export declare class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNameBuildconfigPathParams extends SpeakeasyBase {
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameBuildconfigSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameBuildconfigRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNameBuildconfigPathParams;
    security: GetBuildProjectNameRepositoryNameBuildconfigSecurity;
}
export declare class GetBuildProjectNameRepositoryNameBuildconfigResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

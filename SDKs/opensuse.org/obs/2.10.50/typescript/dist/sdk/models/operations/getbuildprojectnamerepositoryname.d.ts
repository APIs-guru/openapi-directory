import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNameRepositoryNamePathParams extends SpeakeasyBase {
    projectName: string;
    repositoryName: string;
}
export declare class GetBuildProjectNameRepositoryNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRepositoryNameRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNameRepositoryNamePathParams;
    security: GetBuildProjectNameRepositoryNameSecurity;
}
export declare class GetBuildProjectNameRepositoryNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

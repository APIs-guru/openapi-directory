import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNameRepositoryNameArchitectureNamePathParams extends SpeakeasyBase {
    architectureName: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNameRepositoryNameArchitectureNamePathParams;
    security: GetPublishedProjectNameRepositoryNameArchitectureNameSecurity;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

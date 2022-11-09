import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNameRepositoryNamePathParams extends SpeakeasyBase {
    projectName: string;
    repositoryName: string;
}
export declare class GetPublishedProjectNameRepositoryNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRepositoryNameRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNameRepositoryNamePathParams;
    security: GetPublishedProjectNameRepositoryNameSecurity;
}
export declare class GetPublishedProjectNameRepositoryNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

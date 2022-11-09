import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams extends SpeakeasyBase {
    projectName: string;
    repositoryName: string;
}
export declare enum GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum {
    Status = "status"
}
export declare class GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams extends SpeakeasyBase {
    view?: GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum;
}
export declare class GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRepositoryNameViewEqualStatusRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams;
    queryParams: GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams;
    security: GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity;
}
export declare class GetPublishedProjectNameRepositoryNameViewEqualStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

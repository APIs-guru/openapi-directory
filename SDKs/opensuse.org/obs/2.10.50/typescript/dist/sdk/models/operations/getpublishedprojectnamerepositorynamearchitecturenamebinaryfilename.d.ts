import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams extends SpeakeasyBase {
    architectureName: string;
    binaryFilename: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams;
    security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200ApplicationWildcardBinaryString?: Uint8Array;
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}

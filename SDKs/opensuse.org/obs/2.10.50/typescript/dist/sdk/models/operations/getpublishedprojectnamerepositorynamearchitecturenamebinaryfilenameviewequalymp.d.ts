import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams extends SpeakeasyBase {
    architectureName: string;
    binaryFilename: string;
    projectName: string;
    repositoryName: string;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams;
    security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity;
}
export declare class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

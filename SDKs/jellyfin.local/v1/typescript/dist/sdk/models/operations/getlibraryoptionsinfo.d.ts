import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLibraryOptionsInfoQueryParams extends SpeakeasyBase {
    isNewLibrary?: boolean;
    libraryContentType?: string;
}
export declare class GetLibraryOptionsInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLibraryOptionsInfoRequest extends SpeakeasyBase {
    queryParams: GetLibraryOptionsInfoQueryParams;
    security: GetLibraryOptionsInfoSecurity;
}
export declare class GetLibraryOptionsInfoResponse extends SpeakeasyBase {
    contentType: string;
    libraryOptionsResultDto?: shared.LibraryOptionsResultDto;
    statusCode: number;
}

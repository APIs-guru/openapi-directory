import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportLibraryV2PathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class ImportLibraryV2Security extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class ImportLibraryV2Request extends SpeakeasyBase {
    pathParams: ImportLibraryV2PathParams;
    request: shared.BulkImportRequest;
    security: ImportLibraryV2Security;
}
export declare class ImportLibraryV2Response extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    importResponse?: shared.ImportResponse;
    statusCode: number;
}

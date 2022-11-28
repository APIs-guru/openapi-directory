import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLatestImportStatusPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetLatestImportStatusSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetLatestImportStatusRequest extends SpeakeasyBase {
    pathParams: GetLatestImportStatusPathParams;
    security: GetLatestImportStatusSecurity;
}
export declare class GetLatestImportStatusResponse extends SpeakeasyBase {
    contentType: string;
    importResponse?: shared.ImportResponse;
    statusCode: number;
}

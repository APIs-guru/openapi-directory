import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
}
export declare class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
    pathParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams;
    queryParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}
export declare class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

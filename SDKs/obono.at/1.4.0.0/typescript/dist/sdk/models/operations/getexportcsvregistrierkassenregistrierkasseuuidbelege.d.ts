import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    posten?: boolean;
}
export declare class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
    pathParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams;
    queryParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}
export declare class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

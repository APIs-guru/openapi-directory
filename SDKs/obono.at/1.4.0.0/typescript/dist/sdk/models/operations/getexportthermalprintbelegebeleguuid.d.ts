import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExportThermalPrintBelegeBelegUuidPathParams extends SpeakeasyBase {
    belegUuid: string;
}
export declare enum GetExportThermalPrintBelegeBelegUuidDialectEnum {
    Escpos = "escpos",
    Escposlite = "escposlite",
    Star = "star",
    Text = "text"
}
export declare enum GetExportThermalPrintBelegeBelegUuidEncodingEnum {
    Raw = "raw",
    Base64 = "base64"
}
export declare class GetExportThermalPrintBelegeBelegUuidQueryParams extends SpeakeasyBase {
    dialect?: GetExportThermalPrintBelegeBelegUuidDialectEnum;
    encoding?: GetExportThermalPrintBelegeBelegUuidEncodingEnum;
    qr?: boolean;
    width?: number;
}
export declare class GetExportThermalPrintBelegeBelegUuidRequest extends SpeakeasyBase {
    pathParams: GetExportThermalPrintBelegeBelegUuidPathParams;
    queryParams: GetExportThermalPrintBelegeBelegUuidQueryParams;
}
export declare class GetExportThermalPrintBelegeBelegUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

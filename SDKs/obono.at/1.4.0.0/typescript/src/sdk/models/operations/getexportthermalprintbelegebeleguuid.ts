import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportThermalPrintBelegeBelegUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}

export enum GetExportThermalPrintBelegeBelegUuidDialectEnum {
    Escpos = "escpos"
,    Escposlite = "escposlite"
,    Star = "star"
,    Text = "text"
}

export enum GetExportThermalPrintBelegeBelegUuidEncodingEnum {
    Raw = "raw"
,    Base64 = "base64"
}


export class GetExportThermalPrintBelegeBelegUuidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dialect" })
  dialect?: GetExportThermalPrintBelegeBelegUuidDialectEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encoding" })
  encoding?: GetExportThermalPrintBelegeBelegUuidEncodingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=qr" })
  qr?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetExportThermalPrintBelegeBelegUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportThermalPrintBelegeBelegUuidPathParams;

  @Metadata()
  queryParams: GetExportThermalPrintBelegeBelegUuidQueryParams;
}


export class GetExportThermalPrintBelegeBelegUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

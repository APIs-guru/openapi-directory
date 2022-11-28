import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportThermalPrintBelegeBelegUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}

export enum GetExportThermalPrintBelegeBelegUuidDialectEnum {
    Escpos = "escpos",
    Escposlite = "escposlite",
    Star = "star",
    Text = "text"
}

export enum GetExportThermalPrintBelegeBelegUuidEncodingEnum {
    Raw = "raw",
    Base64 = "base64"
}


export class GetExportThermalPrintBelegeBelegUuidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dialect" })
  dialect?: GetExportThermalPrintBelegeBelegUuidDialectEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encoding" })
  encoding?: GetExportThermalPrintBelegeBelegUuidEncodingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=qr" })
  qr?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetExportThermalPrintBelegeBelegUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportThermalPrintBelegeBelegUuidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportThermalPrintBelegeBelegUuidQueryParams;
}


export class GetExportThermalPrintBelegeBelegUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportPdfBelegeBelegUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportPdfBelegeBelegUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportPdfBelegeBelegUuidPathParams;
}


export class GetExportPdfBelegeBelegUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportPdfBelegeBelegUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportPdfBelegeBelegUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportPdfBelegeBelegUuidPathParams;
}


export class GetExportPdfBelegeBelegUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

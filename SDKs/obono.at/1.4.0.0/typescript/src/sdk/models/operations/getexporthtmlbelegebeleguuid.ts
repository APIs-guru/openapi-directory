import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportHtmlBelegeBelegUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportHtmlBelegeBelegUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportHtmlBelegeBelegUuidPathParams;
}


export class GetExportHtmlBelegeBelegUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

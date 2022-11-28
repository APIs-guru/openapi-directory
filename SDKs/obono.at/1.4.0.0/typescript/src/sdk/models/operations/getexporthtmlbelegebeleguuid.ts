import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportHtmlBelegeBelegUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportHtmlBelegeBelegUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportHtmlBelegeBelegUuidPathParams;
}


export class GetExportHtmlBelegeBelegUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

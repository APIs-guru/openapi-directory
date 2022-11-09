import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportQrBelegeBelegUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportQrBelegeBelegUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportQrBelegeBelegUuidPathParams;
}


export class GetExportQrBelegeBelegUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

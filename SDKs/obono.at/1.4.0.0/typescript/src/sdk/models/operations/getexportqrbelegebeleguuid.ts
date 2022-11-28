import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportQrBelegeBelegUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetExportQrBelegeBelegUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportQrBelegeBelegUuidPathParams;
}


export class GetExportQrBelegeBelegUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

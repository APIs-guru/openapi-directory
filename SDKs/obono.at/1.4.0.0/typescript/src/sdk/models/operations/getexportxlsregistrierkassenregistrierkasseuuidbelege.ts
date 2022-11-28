import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

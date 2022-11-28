import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posten" })
  posten?: boolean;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

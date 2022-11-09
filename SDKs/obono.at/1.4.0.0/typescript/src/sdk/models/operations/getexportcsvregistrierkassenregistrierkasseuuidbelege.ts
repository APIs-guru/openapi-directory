import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=posten" })
  posten?: boolean;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams;

  @Metadata()
  queryParams: GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

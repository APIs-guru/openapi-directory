import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegePathParams;

  @Metadata()
  queryParams: GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

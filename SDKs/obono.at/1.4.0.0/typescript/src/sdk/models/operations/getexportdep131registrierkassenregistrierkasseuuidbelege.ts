import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams;

  @Metadata()
  queryParams: GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams;

  @Metadata()
  queryParams: GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

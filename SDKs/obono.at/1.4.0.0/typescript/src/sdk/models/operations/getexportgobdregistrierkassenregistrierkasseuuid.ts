import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams;

  @Metadata()
  queryParams: GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

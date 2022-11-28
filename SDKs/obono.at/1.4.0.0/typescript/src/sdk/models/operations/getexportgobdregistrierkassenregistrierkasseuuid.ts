import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportGobdRegistrierkassenRegistrierkasseUuidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams;
}


export class GetExportGobdRegistrierkassenRegistrierkasseUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

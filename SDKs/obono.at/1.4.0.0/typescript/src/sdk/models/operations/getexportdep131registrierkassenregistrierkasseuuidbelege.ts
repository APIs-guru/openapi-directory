import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

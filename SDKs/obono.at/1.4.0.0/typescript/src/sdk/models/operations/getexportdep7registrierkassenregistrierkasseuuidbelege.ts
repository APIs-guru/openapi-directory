import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}


export class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

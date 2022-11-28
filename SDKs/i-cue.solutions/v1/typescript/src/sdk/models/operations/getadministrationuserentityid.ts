import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdministrationUserEntityIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: number;
}


export class GetAdministrationUserEntityIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationUserEntityIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdministrationUserEntityIdPathParams;

  @SpeakeasyMetadata()
  headers: GetAdministrationUserEntityIdHeaders;
}


export class GetAdministrationUserEntityIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

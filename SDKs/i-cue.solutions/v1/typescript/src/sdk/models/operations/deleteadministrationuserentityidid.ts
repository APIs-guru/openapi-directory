import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdministrationUserEntityIdIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdministrationUserEntityIdIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationUserEntityIdIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdministrationUserEntityIdIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteAdministrationUserEntityIdIdHeaders;
}


export class DeleteAdministrationUserEntityIdIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

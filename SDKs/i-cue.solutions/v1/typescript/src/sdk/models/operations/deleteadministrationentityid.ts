import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdministrationEntityIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdministrationEntityIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationEntityIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdministrationEntityIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteAdministrationEntityIdHeaders;
}


export class DeleteAdministrationEntityIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

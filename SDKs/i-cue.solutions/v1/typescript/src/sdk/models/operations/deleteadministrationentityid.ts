import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdministrationEntityIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdministrationEntityIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationEntityIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdministrationEntityIdPathParams;

  @Metadata()
  headers: DeleteAdministrationEntityIdHeaders;
}


export class DeleteAdministrationEntityIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

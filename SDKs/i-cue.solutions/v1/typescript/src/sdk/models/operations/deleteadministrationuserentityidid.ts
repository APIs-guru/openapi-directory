import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdministrationUserEntityIdIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdministrationUserEntityIdIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationUserEntityIdIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdministrationUserEntityIdIdPathParams;

  @Metadata()
  headers: DeleteAdministrationUserEntityIdIdHeaders;
}


export class DeleteAdministrationUserEntityIdIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdministrationUserEntityIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: number;
}


export class GetAdministrationUserEntityIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationUserEntityIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdministrationUserEntityIdPathParams;

  @Metadata()
  headers: GetAdministrationUserEntityIdHeaders;
}


export class GetAdministrationUserEntityIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

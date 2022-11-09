import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAMapQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constraint" })
  constraint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variable" })
  variable: string;
}


export class CreateAMapHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class CreateAMapRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAMapQueryParams;

  @Metadata()
  headers: CreateAMapHeaders;
}


export class CreateAMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

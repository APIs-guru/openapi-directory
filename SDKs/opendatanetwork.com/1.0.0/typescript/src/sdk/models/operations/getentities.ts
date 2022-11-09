import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEntitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_name" })
  entityName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_type" })
  entityType?: string;
}


export class GetEntitiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEntitiesQueryParams;

  @Metadata()
  headers: GetEntitiesHeaders;
}


export class GetEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

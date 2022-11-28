import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_name" })
  entityName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_type" })
  entityType?: string;
}


export class GetEntitiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: GetEntitiesHeaders;
}


export class GetEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

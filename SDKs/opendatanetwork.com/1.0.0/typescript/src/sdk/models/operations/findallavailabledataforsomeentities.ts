import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FindAllAvailableDataForSomeEntitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;
}


export class FindAllAvailableDataForSomeEntitiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class FindAllAvailableDataForSomeEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindAllAvailableDataForSomeEntitiesQueryParams;

  @Metadata()
  headers: FindAllAvailableDataForSomeEntitiesHeaders;
}


export class FindAllAvailableDataForSomeEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

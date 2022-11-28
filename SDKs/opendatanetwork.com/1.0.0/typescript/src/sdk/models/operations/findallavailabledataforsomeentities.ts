import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FindAllAvailableDataForSomeEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;
}


export class FindAllAvailableDataForSomeEntitiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class FindAllAvailableDataForSomeEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindAllAvailableDataForSomeEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: FindAllAvailableDataForSomeEntitiesHeaders;
}


export class FindAllAvailableDataForSomeEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

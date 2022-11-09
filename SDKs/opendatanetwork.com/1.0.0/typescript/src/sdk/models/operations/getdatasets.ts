import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDatasetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dataset_id" })
  datasetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetDatasetsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetDatasetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatasetsQueryParams;

  @Metadata()
  headers: GetDatasetsHeaders;
}


export class GetDatasetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

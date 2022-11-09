import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetChangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChangesQueryParams;
}


export class GetChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChanges200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

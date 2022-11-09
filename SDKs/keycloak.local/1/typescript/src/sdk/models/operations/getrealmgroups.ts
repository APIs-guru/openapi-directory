import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetRealmGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsPathParams;

  @Metadata()
  queryParams: GetRealmGroupsQueryParams;
}


export class GetRealmGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @Metadata()
  statusCode: number;
}

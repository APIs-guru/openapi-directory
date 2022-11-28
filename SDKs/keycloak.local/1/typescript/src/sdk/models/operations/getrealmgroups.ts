import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetRealmGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmGroupsQueryParams;
}


export class GetRealmGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}

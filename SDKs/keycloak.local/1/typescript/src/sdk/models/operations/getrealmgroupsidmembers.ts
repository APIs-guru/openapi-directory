import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupsIdMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmGroupsIdMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsIdMembersPathParams;

  @Metadata()
  queryParams: GetRealmGroupsIdMembersQueryParams;
}


export class GetRealmGroupsIdMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserRepresentation })
  userRepresentations?: shared.UserRepresentation[];
}

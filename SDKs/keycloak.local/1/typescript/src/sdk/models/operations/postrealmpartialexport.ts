import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmPartialExportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPartialExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exportClients" })
  exportClients?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exportGroupsAndRoles" })
  exportGroupsAndRoles?: boolean;
}


export class PostRealmPartialExportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmPartialExportPathParams;

  @Metadata()
  queryParams: PostRealmPartialExportQueryParams;
}


export class PostRealmPartialExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  realmRepresentation?: shared.RealmRepresentation;

  @Metadata()
  statusCode: number;
}

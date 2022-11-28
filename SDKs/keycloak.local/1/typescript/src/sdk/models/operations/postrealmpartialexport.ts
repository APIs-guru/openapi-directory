import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmPartialExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPartialExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exportClients" })
  exportClients?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exportGroupsAndRoles" })
  exportGroupsAndRoles?: boolean;
}


export class PostRealmPartialExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmPartialExportPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRealmPartialExportQueryParams;
}


export class PostRealmPartialExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  realmRepresentation?: shared.RealmRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}

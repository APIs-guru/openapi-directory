import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmUserStorageIdSyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdSyncQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;
}


export class PostRealmUserStorageIdSyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUserStorageIdSyncPathParams;

  @Metadata()
  queryParams: PostRealmUserStorageIdSyncQueryParams;
}


export class PostRealmUserStorageIdSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  synchronizationResult?: shared.SynchronizationResult;
}

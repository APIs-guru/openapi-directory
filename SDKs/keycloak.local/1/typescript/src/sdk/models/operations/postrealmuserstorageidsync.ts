import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmUserStorageIdSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdSyncQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;
}


export class PostRealmUserStorageIdSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUserStorageIdSyncPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRealmUserStorageIdSyncQueryParams;
}


export class PostRealmUserStorageIdSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  synchronizationResult?: shared.SynchronizationResult;
}

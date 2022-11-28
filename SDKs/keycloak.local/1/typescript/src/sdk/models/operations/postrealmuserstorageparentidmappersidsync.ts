import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmUserStorageParentIdMappersIdSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parentId" })
  parentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageParentIdMappersIdSyncQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: string;
}


export class PostRealmUserStorageParentIdMappersIdSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUserStorageParentIdMappersIdSyncPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRealmUserStorageParentIdMappersIdSyncQueryParams;
}


export class PostRealmUserStorageParentIdMappersIdSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  synchronizationResult?: shared.SynchronizationResult;
}

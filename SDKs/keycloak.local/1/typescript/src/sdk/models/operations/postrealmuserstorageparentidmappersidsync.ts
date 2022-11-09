import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmUserStorageParentIdMappersIdSyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parentId" })
  parentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageParentIdMappersIdSyncQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: string;
}


export class PostRealmUserStorageParentIdMappersIdSyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUserStorageParentIdMappersIdSyncPathParams;

  @Metadata()
  queryParams: PostRealmUserStorageParentIdMappersIdSyncQueryParams;
}


export class PostRealmUserStorageParentIdMappersIdSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  synchronizationResult?: shared.SynchronizationResult;
}

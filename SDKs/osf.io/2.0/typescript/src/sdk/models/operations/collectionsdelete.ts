import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsDeletePathParams;
}


export class CollectionsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

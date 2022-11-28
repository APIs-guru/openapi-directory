import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsLinkedRegistrationsRelationshipsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedRegistrationsRelationshipsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsLinkedRegistrationsRelationshipsDeletePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedRegistrationsRelationshipsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

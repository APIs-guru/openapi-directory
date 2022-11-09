import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedRegistrationsRelationshipsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedRegistrationsRelationshipsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedRegistrationsRelationshipsDeletePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedRegistrationsRelationshipsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

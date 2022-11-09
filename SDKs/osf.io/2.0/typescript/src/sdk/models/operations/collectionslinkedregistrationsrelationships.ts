import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedRegistrationsRelationshipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedRegistrationsRelationshipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedRegistrationsRelationshipsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedRegistrationsRelationshipsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

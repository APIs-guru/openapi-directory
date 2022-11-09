import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedRegistrationsRelationshipsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedRegistrationsRelationshipsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedRegistrationsRelationshipsCreatePathParams;
}


export class CollectionsLinkedRegistrationsRelationshipsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

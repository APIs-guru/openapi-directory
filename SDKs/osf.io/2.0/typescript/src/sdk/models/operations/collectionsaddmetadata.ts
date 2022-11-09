import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsAddMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsAddMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsAddMetadataPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsAddMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

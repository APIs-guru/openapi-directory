import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdStoreStraightPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStoreStraightRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdStoreStraightPathParams;

  @Metadata({ data: "request, media_type=application/dicom" })
  request?: Uint8Array;
}


export class PostModalitiesIdStoreStraightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdStoreStraight200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

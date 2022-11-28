import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdStorageCommitmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStorageCommitmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdStorageCommitmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdStorageCommitmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postModalitiesIdStorageCommitment200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

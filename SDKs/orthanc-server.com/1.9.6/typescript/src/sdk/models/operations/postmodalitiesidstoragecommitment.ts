import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdStorageCommitmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStorageCommitmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdStorageCommitmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdStorageCommitmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdStorageCommitment200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

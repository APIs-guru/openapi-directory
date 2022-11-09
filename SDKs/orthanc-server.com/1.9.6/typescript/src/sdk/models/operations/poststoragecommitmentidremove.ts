import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStorageCommitmentIdRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStorageCommitmentIdRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStorageCommitmentIdRemovePathParams;
}


export class PostStorageCommitmentIdRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

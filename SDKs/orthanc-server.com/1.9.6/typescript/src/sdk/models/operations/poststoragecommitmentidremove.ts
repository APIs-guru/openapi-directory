import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStorageCommitmentIdRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStorageCommitmentIdRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStorageCommitmentIdRemovePathParams;
}


export class PostStorageCommitmentIdRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

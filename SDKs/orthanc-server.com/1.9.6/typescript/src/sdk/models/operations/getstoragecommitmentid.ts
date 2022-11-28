import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStorageCommitmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStorageCommitmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStorageCommitmentIdPathParams;
}


export class GetStorageCommitmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStorageCommitmentId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

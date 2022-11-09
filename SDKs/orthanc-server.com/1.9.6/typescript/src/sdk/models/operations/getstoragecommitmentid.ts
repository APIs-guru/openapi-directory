import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStorageCommitmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStorageCommitmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStorageCommitmentIdPathParams;
}


export class GetStorageCommitmentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStorageCommitmentId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

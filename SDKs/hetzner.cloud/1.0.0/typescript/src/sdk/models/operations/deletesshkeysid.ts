import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSshKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSshKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSshKeysIdPathParams;
}


export class DeleteSshKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

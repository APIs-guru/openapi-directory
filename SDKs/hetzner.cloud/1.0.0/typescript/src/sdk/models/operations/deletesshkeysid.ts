import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSshKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSshKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSshKeysIdPathParams;
}


export class DeleteSshKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

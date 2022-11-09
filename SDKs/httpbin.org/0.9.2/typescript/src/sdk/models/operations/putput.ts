import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

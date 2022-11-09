import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

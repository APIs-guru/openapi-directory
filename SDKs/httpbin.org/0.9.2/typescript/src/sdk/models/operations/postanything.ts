import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

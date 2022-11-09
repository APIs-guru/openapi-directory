import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

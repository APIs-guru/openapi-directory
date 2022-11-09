import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HatOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  textError?: string;
}

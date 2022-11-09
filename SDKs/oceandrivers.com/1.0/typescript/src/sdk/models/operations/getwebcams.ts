import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebCamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHtmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

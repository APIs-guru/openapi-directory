import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCookiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

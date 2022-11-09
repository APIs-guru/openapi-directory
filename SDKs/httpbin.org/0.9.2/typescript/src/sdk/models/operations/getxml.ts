import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetXmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

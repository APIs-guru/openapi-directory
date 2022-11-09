import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BaseReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

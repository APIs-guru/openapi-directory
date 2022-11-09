import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

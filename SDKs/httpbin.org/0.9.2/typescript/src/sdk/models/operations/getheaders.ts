import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHeadersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

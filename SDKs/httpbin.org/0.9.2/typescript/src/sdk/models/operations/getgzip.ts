import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGzipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

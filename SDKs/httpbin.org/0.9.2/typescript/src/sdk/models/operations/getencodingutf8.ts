import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEncodingUtf8Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

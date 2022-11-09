import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeflateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

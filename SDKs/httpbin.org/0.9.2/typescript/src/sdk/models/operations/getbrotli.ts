import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBrotliResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

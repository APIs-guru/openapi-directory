import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SummaryGetV2SummaryGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  openAqResult?: shared.OpenAqResult;

  @Metadata()
  statusCode: number;
}

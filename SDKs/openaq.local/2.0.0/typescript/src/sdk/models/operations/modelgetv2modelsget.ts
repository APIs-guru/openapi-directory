import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ModelGetV2ModelsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  openAqResult?: shared.OpenAqResult;

  @Metadata()
  statusCode: number;
}

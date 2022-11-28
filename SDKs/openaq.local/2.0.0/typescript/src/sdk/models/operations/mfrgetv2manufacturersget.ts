import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MfrGetV2ManufacturersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  openAqResult?: shared.OpenAqResult;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiClassifiersStatusOut?: shared.ApiClassifiersStatusOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

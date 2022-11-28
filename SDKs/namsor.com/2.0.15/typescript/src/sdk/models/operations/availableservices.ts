import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AvailableServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiServicesOut?: shared.ApiServicesOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SoftwareVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  softwareVersionOut?: shared.SoftwareVersionOut;

  @SpeakeasyMetadata()
  statusCode: number;
}

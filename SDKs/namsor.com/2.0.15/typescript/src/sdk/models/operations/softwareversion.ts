import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SoftwareVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  softwareVersionOut?: shared.SoftwareVersionOut;

  @Metadata()
  statusCode: number;
}

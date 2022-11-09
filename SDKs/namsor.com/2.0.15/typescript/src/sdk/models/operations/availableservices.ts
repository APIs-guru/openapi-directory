import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AvailableServicesResponse extends SpeakeasyBase {
  @Metadata()
  apiServicesOut?: shared.ApiServicesOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

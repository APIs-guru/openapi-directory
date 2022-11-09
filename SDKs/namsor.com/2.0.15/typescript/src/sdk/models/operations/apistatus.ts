import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiClassifiersStatusOut?: shared.ApiClassifiersStatusOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

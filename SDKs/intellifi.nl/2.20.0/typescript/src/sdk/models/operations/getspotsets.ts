import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotsetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotSet?: shared.SpotSet;

  @Metadata()
  statusCode: number;
}

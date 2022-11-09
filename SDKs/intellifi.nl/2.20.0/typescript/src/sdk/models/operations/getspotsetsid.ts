import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotsetsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotsetsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotsetsIdPathParams;
}


export class GetSpotsetsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotSet?: shared.SpotSet;

  @Metadata()
  statusCode: number;
}

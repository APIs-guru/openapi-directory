import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotSetsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotSetsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotSetsByIdPathParams;
}


export class GetSpotSetsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotSet?: shared.SpotSet;

  @Metadata()
  statusCode: number;
}

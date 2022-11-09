import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotSetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=setId" })
  setId: string;
}


export class GetSpotSetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotSetByIdPathParams;
}


export class GetSpotSetByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotSet?: shared.SpotSet;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksUnitsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksUnitsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRacksUnitsPathParams;
}


export class DcimRacksUnitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rack?: shared.Rack;

  @Metadata()
  statusCode: number;
}

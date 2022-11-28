import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRacksUnitsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksUnitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRacksUnitsPathParams;
}


export class DcimRacksUnitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rack?: shared.Rack;

  @SpeakeasyMetadata()
  statusCode: number;
}

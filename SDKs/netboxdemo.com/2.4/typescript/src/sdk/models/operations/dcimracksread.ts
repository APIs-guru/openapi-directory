import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRacksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRacksReadPathParams;
}


export class DcimRacksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rack?: shared.Rack;

  @SpeakeasyMetadata()
  statusCode: number;
}

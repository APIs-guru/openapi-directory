import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRacksReadPathParams;
}


export class DcimRacksReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rack?: shared.Rack;

  @Metadata()
  statusCode: number;
}

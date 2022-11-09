import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquifersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aquifer_id" })
  aquiferId: number;
}


export class AquifersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AquifersReadPathParams;
}


export class AquifersReadResponse extends SpeakeasyBase {
  @Metadata()
  aquifer?: shared.Aquifer;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquifersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aquifer_id" })
  aquiferId: number;
}


export class AquifersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AquifersReadPathParams;
}


export class AquifersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aquifer?: shared.Aquifer;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

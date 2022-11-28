import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationByIdPathParams;
}


export class GetLocationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  location?: shared.Location;

  @SpeakeasyMetadata()
  statusCode: number;
}

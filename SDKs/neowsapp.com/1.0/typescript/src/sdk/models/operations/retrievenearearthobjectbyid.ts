import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveNearEarthObjectByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asteroid_id" })
  asteroidId: string;
}


export class RetrieveNearEarthObjectByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveNearEarthObjectByIdPathParams;
}


export class RetrieveNearEarthObjectByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nearEarthObject?: shared.NearEarthObject;

  @SpeakeasyMetadata()
  statusCode: number;
}

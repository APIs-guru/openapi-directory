import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveNearEarthObjectByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asteroid_id" })
  asteroidId: string;
}


export class RetrieveNearEarthObjectByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveNearEarthObjectByIdPathParams;
}


export class RetrieveNearEarthObjectByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nearEarthObject?: shared.NearEarthObject;

  @Metadata()
  statusCode: number;
}

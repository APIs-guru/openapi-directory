import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLocationByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocationByIdPathParams;
}


export class GetLocationByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  location?: shared.Location;

  @Metadata()
  statusCode: number;
}

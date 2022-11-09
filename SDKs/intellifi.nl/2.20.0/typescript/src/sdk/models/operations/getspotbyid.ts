import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotByIdPathParams;
}


export class GetSpotByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotGet?: shared.SpotGet;

  @Metadata()
  statusCode: number;
}

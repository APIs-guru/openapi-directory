import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpotByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotByIdPathParams;
}


export class GetSpotByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spotGet?: shared.SpotGet;

  @SpeakeasyMetadata()
  statusCode: number;
}

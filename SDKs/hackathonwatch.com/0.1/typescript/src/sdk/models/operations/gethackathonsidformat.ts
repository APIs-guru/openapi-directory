import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHackathonsIdFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetHackathonsIdFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHackathonsIdFormatPathParams;
}


export class GetHackathonsIdFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

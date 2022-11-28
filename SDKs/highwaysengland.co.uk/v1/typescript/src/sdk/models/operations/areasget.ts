import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AreasGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class AreasGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AreasGetPathParams;
}


export class AreasGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areaResponse?: shared.AreaResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

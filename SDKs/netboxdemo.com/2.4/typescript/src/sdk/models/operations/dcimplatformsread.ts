import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPlatformsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPlatformsReadPathParams;
}


export class DcimPlatformsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  platform?: shared.Platform;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPlatformsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPlatformsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePlatform;
}


export class DcimPlatformsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  platform?: shared.Platform;

  @Metadata()
  statusCode: number;
}

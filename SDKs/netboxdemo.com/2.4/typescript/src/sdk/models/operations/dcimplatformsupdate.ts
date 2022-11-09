import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPlatformsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPlatformsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePlatform;
}


export class DcimPlatformsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  platform?: shared.Platform;

  @Metadata()
  statusCode: number;
}

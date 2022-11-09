import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPlatformsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPlatformsReadPathParams;
}


export class DcimPlatformsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  platform?: shared.Platform;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRegionsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRegionsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRegionsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRegion;
}


export class DcimRegionsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  region?: shared.Region;

  @Metadata()
  statusCode: number;
}

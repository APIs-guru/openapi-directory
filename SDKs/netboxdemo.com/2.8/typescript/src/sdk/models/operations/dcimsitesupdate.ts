import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimSitesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimSitesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimSitesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableSite;
}


export class DcimSitesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  site?: shared.Site;

  @Metadata()
  statusCode: number;
}

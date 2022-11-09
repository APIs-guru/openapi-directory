import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableFrontPortTemplate;
}


export class DcimFrontPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPortTemplate?: shared.FrontPortTemplate;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableFrontPortTemplate;
}


export class DcimFrontPortTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPortTemplate?: shared.FrontPortTemplate;

  @Metadata()
  statusCode: number;
}

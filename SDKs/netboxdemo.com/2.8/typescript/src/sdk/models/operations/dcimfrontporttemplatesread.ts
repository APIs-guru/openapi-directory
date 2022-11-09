import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortTemplatesReadPathParams;
}


export class DcimFrontPortTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPortTemplate?: shared.FrontPortTemplate;

  @Metadata()
  statusCode: number;
}

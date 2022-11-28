import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimFrontPortTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimFrontPortTemplatesReadPathParams;
}


export class DcimFrontPortTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  frontPortTemplate?: shared.FrontPortTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}

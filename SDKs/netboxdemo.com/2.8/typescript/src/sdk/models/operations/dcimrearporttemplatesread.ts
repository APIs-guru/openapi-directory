import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRearPortTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRearPortTemplatesReadPathParams;
}


export class DcimRearPortTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rearPortTemplate?: shared.RearPortTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}

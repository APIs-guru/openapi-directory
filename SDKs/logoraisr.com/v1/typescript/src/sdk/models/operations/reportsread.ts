import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_number" })
  reportNumber: string;
}


export class ReportsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportsReadPathParams;
}


export class ReportsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  report?: shared.Report;

  @SpeakeasyMetadata()
  statusCode: number;
}

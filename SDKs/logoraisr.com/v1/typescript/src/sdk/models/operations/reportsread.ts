import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_number" })
  reportNumber: string;
}


export class ReportsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReportsReadPathParams;
}


export class ReportsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  report?: shared.Report;

  @Metadata()
  statusCode: number;
}

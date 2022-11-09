import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  report?: shared.Report;

  @Metadata()
  statusCode: number;
}

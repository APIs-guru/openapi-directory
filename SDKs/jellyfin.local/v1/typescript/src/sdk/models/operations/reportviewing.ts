import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportViewingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionId" })
  sessionId?: string;
}


export class ReportViewingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportViewingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportViewingQueryParams;

  @Metadata()
  security: ReportViewingSecurity;
}


export class ReportViewingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

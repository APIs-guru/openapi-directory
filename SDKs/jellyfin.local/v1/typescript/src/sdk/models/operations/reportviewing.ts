import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportViewingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionId" })
  sessionId?: string;
}


export class ReportViewingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ReportViewingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportViewingQueryParams;

  @SpeakeasyMetadata()
  security: ReportViewingSecurity;
}


export class ReportViewingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

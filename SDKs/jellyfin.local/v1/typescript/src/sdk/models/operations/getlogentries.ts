import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogEntriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hasUserId" })
  hasUserId?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDate" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetLogEntriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLogEntriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLogEntriesQueryParams;

  @Metadata()
  security: GetLogEntriesSecurity;
}


export class GetLogEntriesResponse extends SpeakeasyBase {
  @Metadata()
  activityLogEntryQueryResult?: shared.ActivityLogEntryQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

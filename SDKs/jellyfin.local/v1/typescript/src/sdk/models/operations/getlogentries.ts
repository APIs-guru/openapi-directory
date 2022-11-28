import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLogEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasUserId" })
  hasUserId?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDate" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetLogEntriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLogEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLogEntriesQueryParams;

  @SpeakeasyMetadata()
  security: GetLogEntriesSecurity;
}


export class GetLogEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityLogEntryQueryResult?: shared.ActivityLogEntryQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

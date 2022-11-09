import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSentryRiskDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class RetrieveSentryRiskDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RetrieveSentryRiskDataQueryParams;
}


export class RetrieveSentryRiskDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sentryObjectPagingDto?: shared.SentryObjectPagingDto;

  @Metadata()
  statusCode: number;
}

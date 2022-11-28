import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveSentryRiskDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class RetrieveSentryRiskDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveSentryRiskDataQueryParams;
}


export class RetrieveSentryRiskDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sentryObjectPagingDto?: shared.SentryObjectPagingDto;

  @SpeakeasyMetadata()
  statusCode: number;
}

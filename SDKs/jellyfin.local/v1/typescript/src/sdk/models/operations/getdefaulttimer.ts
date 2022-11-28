import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDefaultTimerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=programId" })
  programId?: string;
}


export class GetDefaultTimerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultTimerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDefaultTimerQueryParams;

  @SpeakeasyMetadata()
  security: GetDefaultTimerSecurity;
}


export class GetDefaultTimerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDefaultTimerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=programId" })
  programId?: string;
}


export class GetDefaultTimerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultTimerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDefaultTimerQueryParams;

  @Metadata()
  security: GetDefaultTimerSecurity;
}


export class GetDefaultTimerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seriesTimerInfoDto?: shared.SeriesTimerInfoDto;

  @Metadata()
  statusCode: number;
}

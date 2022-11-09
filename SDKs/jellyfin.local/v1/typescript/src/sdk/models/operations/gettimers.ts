import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTimersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isScheduled" })
  isScheduled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;
}


export class GetTimersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTimersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTimersQueryParams;

  @Metadata()
  security: GetTimersSecurity;
}


export class GetTimersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timerInfoDtoQueryResult?: shared.TimerInfoDtoQueryResult;
}

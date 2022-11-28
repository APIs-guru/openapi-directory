import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTimersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isScheduled" })
  isScheduled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;
}


export class GetTimersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTimersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTimersQueryParams;

  @SpeakeasyMetadata()
  security: GetTimersSecurity;
}


export class GetTimersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timerInfoDtoQueryResult?: shared.TimerInfoDtoQueryResult;
}

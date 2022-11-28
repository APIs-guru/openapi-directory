import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveNeoFeedTodayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;
}


export class RetrieveNeoFeedTodayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveNeoFeedTodayQueryParams;
}


export class RetrieveNeoFeedTodayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nearEarthObjectList?: shared.NearEarthObjectList;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveNearEarthObjectFeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class RetrieveNearEarthObjectFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveNearEarthObjectFeedQueryParams;
}


export class RetrieveNearEarthObjectFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nearEarthObjectList?: shared.NearEarthObjectList;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveNearEarthObjectFeedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class RetrieveNearEarthObjectFeedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RetrieveNearEarthObjectFeedQueryParams;
}


export class RetrieveNearEarthObjectFeedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nearEarthObjectList?: shared.NearEarthObjectList;

  @Metadata()
  statusCode: number;
}

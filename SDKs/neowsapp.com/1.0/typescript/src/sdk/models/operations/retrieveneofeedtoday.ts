import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveNeoFeedTodayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;
}


export class RetrieveNeoFeedTodayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RetrieveNeoFeedTodayQueryParams;
}


export class RetrieveNeoFeedTodayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nearEarthObjectList?: shared.NearEarthObjectList;

  @Metadata()
  statusCode: number;
}

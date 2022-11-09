import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecordingGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRecordingGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRecordingGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecordingGroupsQueryParams;

  @Metadata()
  security: GetRecordingGroupsSecurity;
}


export class GetRecordingGroupsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

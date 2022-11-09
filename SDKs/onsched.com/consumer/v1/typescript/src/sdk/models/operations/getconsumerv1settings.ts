import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1SettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1SettingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1SettingsQueryParams;
}


export class GetConsumerV1SettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  onlineSettingsViewModel?: shared.OnlineSettingsViewModel;

  @Metadata()
  statusCode: number;
}

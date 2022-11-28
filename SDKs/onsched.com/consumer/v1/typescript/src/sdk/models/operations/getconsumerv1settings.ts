import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1SettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetConsumerV1SettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1SettingsQueryParams;
}


export class GetConsumerV1SettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  onlineSettingsViewModel?: shared.OnlineSettingsViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}

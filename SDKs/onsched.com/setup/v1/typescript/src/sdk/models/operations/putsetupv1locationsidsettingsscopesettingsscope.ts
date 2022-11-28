import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingsScope" })
  settingsScope: string;
}


export class PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams;
}


export class PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}

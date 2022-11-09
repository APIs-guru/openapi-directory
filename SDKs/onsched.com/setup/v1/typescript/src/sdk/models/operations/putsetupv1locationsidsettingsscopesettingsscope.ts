import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingsScope" })
  settingsScope: string;
}


export class PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams;
}


export class PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}

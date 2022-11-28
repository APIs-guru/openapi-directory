import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CloneOrganizationSwitchDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CloneOrganizationSwitchDevicesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceSerial" })
  sourceSerial: string;

  @SpeakeasyMetadata({ data: "json, name=targetSerials" })
  targetSerials: string[];
}


export class CloneOrganizationSwitchDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneOrganizationSwitchDevicesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneOrganizationSwitchDevicesRequestBody;
}


export class CloneOrganizationSwitchDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneOrganizationSwitchDevices200ApplicationJsonObject?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CloneOrganizationSwitchDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CloneOrganizationSwitchDevicesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceSerial" })
  sourceSerial: string;

  @Metadata({ data: "json, name=targetSerials" })
  targetSerials: string[];
}


export class CloneOrganizationSwitchDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneOrganizationSwitchDevicesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneOrganizationSwitchDevicesRequestBody;
}


export class CloneOrganizationSwitchDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneOrganizationSwitchDevices200ApplicationJsonObject?: Map<string, any>;
}

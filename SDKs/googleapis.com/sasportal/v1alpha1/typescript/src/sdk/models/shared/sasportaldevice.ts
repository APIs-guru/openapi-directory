import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";
import { SasPortalChannelWithScore } from "./sasportalchannelwithscore";
import { SasPortalDeviceMetadata } from "./sasportaldevicemetadata";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDeviceGrant } from "./sasportaldevicegrant";
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";

export enum SasPortalDeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED"
,    Reserved = "RESERVED"
,    Registered = "REGISTERED"
,    Deregistered = "DEREGISTERED"
}


export class SasPortalDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeConfig" })
  activeConfig?: SasPortalDeviceConfig;

  @Metadata({ data: "json, name=currentChannels", elemType: shared.SasPortalChannelWithScore })
  currentChannels?: SasPortalChannelWithScore[];

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: SasPortalDeviceMetadata;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fccId" })
  fccId?: string;

  @Metadata({ data: "json, name=grantRangeAllowlists", elemType: shared.SasPortalFrequencyRange })
  grantRangeAllowlists?: SasPortalFrequencyRange[];

  @Metadata({ data: "json, name=grants", elemType: shared.SasPortalDeviceGrant })
  grants?: SasPortalDeviceGrant[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preloadedConfig" })
  preloadedConfig?: SasPortalDeviceConfig;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=state" })
  state?: SasPortalDeviceStateEnum;
}

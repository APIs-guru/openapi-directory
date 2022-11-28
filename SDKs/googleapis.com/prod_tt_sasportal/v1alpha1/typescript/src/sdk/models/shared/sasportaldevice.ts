import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";
import { SasPortalDeviceMetadataInput } from "./sasportaldevicemetadata";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDeviceGrant } from "./sasportaldevicegrant";
import { SasPortalChannelWithScore } from "./sasportalchannelwithscore";
import { SasPortalDeviceMetadata } from "./sasportaldevicemetadata";


export enum SasPortalDeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Reserved = "RESERVED",
    Registered = "REGISTERED",
    Deregistered = "DEREGISTERED"
}


export class SasPortalDeviceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeConfig" })
  activeConfig?: SasPortalDeviceConfig;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: SasPortalDeviceMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fccId" })
  fccId?: string;

  @SpeakeasyMetadata({ data: "json, name=grantRangeAllowlists", elemType: SasPortalFrequencyRange })
  grantRangeAllowlists?: SasPortalFrequencyRange[];

  @SpeakeasyMetadata({ data: "json, name=grants", elemType: SasPortalDeviceGrant })
  grants?: SasPortalDeviceGrant[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preloadedConfig" })
  preloadedConfig?: SasPortalDeviceConfig;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SasPortalDeviceStateEnum;
}


export class SasPortalDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeConfig" })
  activeConfig?: SasPortalDeviceConfig;

  @SpeakeasyMetadata({ data: "json, name=currentChannels", elemType: SasPortalChannelWithScore })
  currentChannels?: SasPortalChannelWithScore[];

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: SasPortalDeviceMetadata;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fccId" })
  fccId?: string;

  @SpeakeasyMetadata({ data: "json, name=grantRangeAllowlists", elemType: SasPortalFrequencyRange })
  grantRangeAllowlists?: SasPortalFrequencyRange[];

  @SpeakeasyMetadata({ data: "json, name=grants", elemType: SasPortalDeviceGrant })
  grants?: SasPortalDeviceGrant[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preloadedConfig" })
  preloadedConfig?: SasPortalDeviceConfig;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SasPortalDeviceStateEnum;
}

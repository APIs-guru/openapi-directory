import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNrqzValidation } from "./sasportalnrqzvalidation";



// SasPortalDeviceMetadata
/** 
 * Device data overridable by both SAS Portal and registration requests.
**/
export class SasPortalDeviceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaModel" })
  antennaModel?: string;

  @SpeakeasyMetadata({ data: "json, name=commonChannelGroup" })
  commonChannelGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=interferenceCoordinationGroup" })
  interferenceCoordinationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=nrqzValidated" })
  nrqzValidated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nrqzValidation" })
  nrqzValidation?: SasPortalNrqzValidation;
}


// SasPortalDeviceMetadataInput
/** 
 * Device data overridable by both SAS Portal and registration requests.
**/
export class SasPortalDeviceMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaModel" })
  antennaModel?: string;

  @SpeakeasyMetadata({ data: "json, name=commonChannelGroup" })
  commonChannelGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=interferenceCoordinationGroup" })
  interferenceCoordinationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=nrqzValidation" })
  nrqzValidation?: SasPortalNrqzValidation;
}

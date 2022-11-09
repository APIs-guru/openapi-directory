import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalNrqzValidation } from "./sasportalnrqzvalidation";


// SasPortalDeviceMetadata
/** 
 * Device data overridable by both SAS Portal and registration requests.
**/
export class SasPortalDeviceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=antennaModel" })
  antennaModel?: string;

  @Metadata({ data: "json, name=commonChannelGroup" })
  commonChannelGroup?: string;

  @Metadata({ data: "json, name=interferenceCoordinationGroup" })
  interferenceCoordinationGroup?: string;

  @Metadata({ data: "json, name=nrqzValidated" })
  nrqzValidated?: boolean;

  @Metadata({ data: "json, name=nrqzValidation" })
  nrqzValidation?: SasPortalNrqzValidation;
}

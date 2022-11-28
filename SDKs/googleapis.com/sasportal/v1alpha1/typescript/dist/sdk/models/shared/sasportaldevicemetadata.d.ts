import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNrqzValidation } from "./sasportalnrqzvalidation";
/**
 * Device data overridable by both SAS Portal and registration requests.
**/
export declare class SasPortalDeviceMetadataInput extends SpeakeasyBase {
    antennaModel?: string;
    commonChannelGroup?: string;
    interferenceCoordinationGroup?: string;
    nrqzValidation?: SasPortalNrqzValidation;
}
/**
 * Device data overridable by both SAS Portal and registration requests.
**/
export declare class SasPortalDeviceMetadata extends SpeakeasyBase {
    antennaModel?: string;
    commonChannelGroup?: string;
    interferenceCoordinationGroup?: string;
    nrqzValidated?: boolean;
    nrqzValidation?: SasPortalNrqzValidation;
}

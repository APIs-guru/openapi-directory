import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Project-specific data associated with a beacon.
**/
export declare class BeaconAttachment extends SpeakeasyBase {
    attachmentName?: string;
    creationTimeMs?: string;
    data?: string;
    maxDistanceMeters?: number;
    namespacedType?: string;
}

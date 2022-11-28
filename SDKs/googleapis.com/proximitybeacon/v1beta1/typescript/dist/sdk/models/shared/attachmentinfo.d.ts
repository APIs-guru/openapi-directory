import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
**/
export declare class AttachmentInfo extends SpeakeasyBase {
    data?: string;
    maxDistanceMeters?: number;
    namespacedType?: string;
}

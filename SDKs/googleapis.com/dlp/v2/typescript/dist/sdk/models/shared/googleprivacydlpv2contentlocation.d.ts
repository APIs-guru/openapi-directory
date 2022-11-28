import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DocumentLocation } from "./googleprivacydlpv2documentlocation";
import { GooglePrivacyDlpV2ImageLocation } from "./googleprivacydlpv2imagelocation";
import { GooglePrivacyDlpV2MetadataLocation } from "./googleprivacydlpv2metadatalocation";
import { GooglePrivacyDlpV2RecordLocation } from "./googleprivacydlpv2recordlocation";
/**
 * Precise location of the finding within a document, record, image, or metadata container.
**/
export declare class GooglePrivacyDlpV2ContentLocation extends SpeakeasyBase {
    containerName?: string;
    containerTimestamp?: string;
    containerVersion?: string;
    documentLocation?: GooglePrivacyDlpV2DocumentLocation;
    imageLocation?: GooglePrivacyDlpV2ImageLocation;
    metadataLocation?: GooglePrivacyDlpV2MetadataLocation;
    recordLocation?: GooglePrivacyDlpV2RecordLocation;
}

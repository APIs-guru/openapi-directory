import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DocumentLocation } from "./googleprivacydlpv2documentlocation";
import { GooglePrivacyDlpV2ImageLocation } from "./googleprivacydlpv2imagelocation";
import { GooglePrivacyDlpV2MetadataLocation } from "./googleprivacydlpv2metadatalocation";
import { GooglePrivacyDlpV2RecordLocation } from "./googleprivacydlpv2recordlocation";



// GooglePrivacyDlpV2ContentLocation
/** 
 * Precise location of the finding within a document, record, image, or metadata container.
**/
export class GooglePrivacyDlpV2ContentLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerTimestamp" })
  containerTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=containerVersion" })
  containerVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=documentLocation" })
  documentLocation?: GooglePrivacyDlpV2DocumentLocation;

  @SpeakeasyMetadata({ data: "json, name=imageLocation" })
  imageLocation?: GooglePrivacyDlpV2ImageLocation;

  @SpeakeasyMetadata({ data: "json, name=metadataLocation" })
  metadataLocation?: GooglePrivacyDlpV2MetadataLocation;

  @SpeakeasyMetadata({ data: "json, name=recordLocation" })
  recordLocation?: GooglePrivacyDlpV2RecordLocation;
}

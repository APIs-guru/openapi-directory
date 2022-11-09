import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2DocumentLocation } from "./googleprivacydlpv2documentlocation";
import { GooglePrivacyDlpV2ImageLocation } from "./googleprivacydlpv2imagelocation";
import { GooglePrivacyDlpV2MetadataLocation } from "./googleprivacydlpv2metadatalocation";
import { GooglePrivacyDlpV2RecordLocation } from "./googleprivacydlpv2recordlocation";


// GooglePrivacyDlpV2ContentLocation
/** 
 * Precise location of the finding within a document, record, image, or metadata container.
**/
export class GooglePrivacyDlpV2ContentLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=containerTimestamp" })
  containerTimestamp?: string;

  @Metadata({ data: "json, name=containerVersion" })
  containerVersion?: string;

  @Metadata({ data: "json, name=documentLocation" })
  documentLocation?: GooglePrivacyDlpV2DocumentLocation;

  @Metadata({ data: "json, name=imageLocation" })
  imageLocation?: GooglePrivacyDlpV2ImageLocation;

  @Metadata({ data: "json, name=metadataLocation" })
  metadataLocation?: GooglePrivacyDlpV2MetadataLocation;

  @Metadata({ data: "json, name=recordLocation" })
  recordLocation?: GooglePrivacyDlpV2RecordLocation;
}

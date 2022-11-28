import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LettingsLandlordDocument
/** 
 * Document details.
**/
export class LettingsLandlordDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MIMEType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: string;
}

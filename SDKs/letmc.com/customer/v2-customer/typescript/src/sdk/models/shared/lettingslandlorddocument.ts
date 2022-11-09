import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LettingsLandlordDocument
/** 
 * Document details.
**/
export class LettingsLandlordDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileName" })
  fileName?: string;

  @Metadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=MIMEType" })
  mimeType?: string;

  @Metadata({ data: "json, name=Note" })
  note?: string;
}

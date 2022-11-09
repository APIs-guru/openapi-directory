import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FontFile
/** 
 * Class FontFile.
**/
export class FontFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;
}

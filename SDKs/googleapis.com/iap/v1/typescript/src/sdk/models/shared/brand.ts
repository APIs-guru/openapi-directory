import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Brand
/** 
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
export class Brand extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationTitle" })
  applicationTitle?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgInternalOnly" })
  orgInternalOnly?: boolean;

  @Metadata({ data: "json, name=supportEmail" })
  supportEmail?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationCategory
/** 
 * An application category object.
**/
export class ApplicationCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secondary" })
  secondary?: string;
}

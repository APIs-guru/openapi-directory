import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationCategory
/** 
 * An application category object.
**/
export class ApplicationCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary?: string;
}

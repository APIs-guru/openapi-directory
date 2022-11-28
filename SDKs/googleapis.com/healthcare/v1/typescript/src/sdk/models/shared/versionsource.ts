import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VersionSource
/** 
 * Describes a selector for extracting and matching an MSH field to a value.
**/
export class VersionSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mshField" })
  mshField?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

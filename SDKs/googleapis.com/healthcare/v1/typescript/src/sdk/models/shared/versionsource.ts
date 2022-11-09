import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersionSource
/** 
 * Describes a selector for extracting and matching an MSH field to a value.
**/
export class VersionSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=mshField" })
  mshField?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

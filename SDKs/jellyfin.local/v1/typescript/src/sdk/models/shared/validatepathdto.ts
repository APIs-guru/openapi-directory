import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidatePathDto
/** 
 * Validate path object.
**/
export class ValidatePathDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsFile" })
  isFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidateWritable" })
  validateWritable?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidatePathDto
/** 
 * Validate path object.
**/
export class ValidatePathDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsFile" })
  isFile?: boolean;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=ValidateWritable" })
  validateWritable?: boolean;
}

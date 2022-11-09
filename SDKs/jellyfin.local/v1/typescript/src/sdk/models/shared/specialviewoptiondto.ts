import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpecialViewOptionDto
/** 
 * Special view option dto.
**/
export class SpecialViewOptionDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

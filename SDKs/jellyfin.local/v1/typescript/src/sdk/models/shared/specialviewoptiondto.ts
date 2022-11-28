import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpecialViewOptionDto
/** 
 * Special view option dto.
**/
export class SpecialViewOptionDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

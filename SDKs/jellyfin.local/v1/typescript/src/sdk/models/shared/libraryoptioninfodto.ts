import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LibraryOptionInfoDto
/** 
 * Library option info dto.
**/
export class LibraryOptionInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultEnabled" })
  defaultEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

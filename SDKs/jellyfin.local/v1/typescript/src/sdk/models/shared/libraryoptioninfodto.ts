import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LibraryOptionInfoDto
/** 
 * Library option info dto.
**/
export class LibraryOptionInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultEnabled" })
  defaultEnabled?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

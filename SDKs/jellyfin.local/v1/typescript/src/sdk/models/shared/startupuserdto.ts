import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartupUserDto
/** 
 * The startup user DTO.
**/
export class StartupUserDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;
}

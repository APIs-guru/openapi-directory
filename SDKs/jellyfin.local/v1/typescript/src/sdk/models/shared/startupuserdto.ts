import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartupUserDto
/** 
 * The startup user DTO.
**/
export class StartupUserDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;
}

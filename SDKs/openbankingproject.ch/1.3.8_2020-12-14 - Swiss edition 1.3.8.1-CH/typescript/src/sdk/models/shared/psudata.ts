import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PsuData
/** 
 * PSU Data for Update PSU authentication.
**/
export class PsuData extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalEncryptedPassword" })
  additionalEncryptedPassword?: string;

  @Metadata({ data: "json, name=additionalPassword" })
  additionalPassword?: string;

  @Metadata({ data: "json, name=encryptedPassword" })
  encryptedPassword?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}

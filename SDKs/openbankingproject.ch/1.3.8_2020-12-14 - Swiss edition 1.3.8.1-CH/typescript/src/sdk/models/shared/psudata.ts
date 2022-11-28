import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PsuData
/** 
 * PSU Data for Update PSU authentication.
**/
export class PsuData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalEncryptedPassword" })
  additionalEncryptedPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalPassword" })
  additionalPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedPassword" })
  encryptedPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}

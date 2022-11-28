import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Secret
/** 
 * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
**/
export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cipherText" })
  cipherText?: string;

  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;
}

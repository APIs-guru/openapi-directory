import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Secret
/** 
 * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
**/
export class Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=cipherText" })
  cipherText?: string;

  @Metadata({ data: "json, name=keyName" })
  keyName?: string;
}

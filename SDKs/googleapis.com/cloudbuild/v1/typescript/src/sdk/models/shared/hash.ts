import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HashTypeEnum {
    None = "NONE",
    Sha256 = "SHA256",
    Md5 = "MD5"
}


// Hash
/** 
 * Container message for hash values.
**/
export class Hash extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: HashTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HashTypeEnum {
    None = "NONE"
,    Sha256 = "SHA256"
,    Md5 = "MD5"
}


// Hash
/** 
 * Container message for hash values.
**/
export class Hash extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: HashTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

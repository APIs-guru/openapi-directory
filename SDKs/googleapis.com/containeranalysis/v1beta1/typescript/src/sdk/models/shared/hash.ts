import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED"
,    Sha256 = "SHA256"
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

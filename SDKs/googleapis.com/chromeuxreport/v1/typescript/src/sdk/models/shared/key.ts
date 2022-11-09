import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS"
,    Phone = "PHONE"
,    Desktop = "DESKTOP"
,    Tablet = "TABLET"
}


// Key
/** 
 * Key defines all the dimensions that identify this record as unique.
**/
export class Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveConnectionType" })
  effectiveConnectionType?: string;

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: KeyFormFactorEnum;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

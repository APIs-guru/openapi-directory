import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}


// Key
/** 
 * Key defines all the dimensions that identify this record as unique.
**/
export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveConnectionType" })
  effectiveConnectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: KeyFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

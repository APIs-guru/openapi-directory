import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SasPortalNrqzValidationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}


// SasPortalNrqzValidation
/** 
 * Information about National Radio Quiet Zone validation.
**/
export class SasPortalNrqzValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=cpiId" })
  cpiId?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SasPortalNrqzValidationStateEnum;
}

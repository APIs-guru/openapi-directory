import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SasPortalNrqzValidationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Final = "FINAL"
}


// SasPortalNrqzValidation
/** 
 * Information about National Radio Quiet Zone validation.
**/
export class SasPortalNrqzValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseId" })
  caseId?: string;

  @Metadata({ data: "json, name=cpiId" })
  cpiId?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=state" })
  state?: SasPortalNrqzValidationStateEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CareContextDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=patientReference" })
  patientReference: string;
}

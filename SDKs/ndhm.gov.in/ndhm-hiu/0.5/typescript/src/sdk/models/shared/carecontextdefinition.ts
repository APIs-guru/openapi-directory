import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CareContextDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=patientReference" })
  patientReference: string;
}

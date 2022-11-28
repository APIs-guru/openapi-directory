import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConsentManagerPatientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

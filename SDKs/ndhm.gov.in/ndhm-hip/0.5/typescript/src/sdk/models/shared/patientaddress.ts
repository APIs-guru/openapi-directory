import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: string;

  @SpeakeasyMetadata({ data: "json, name=pincode" })
  pincode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}

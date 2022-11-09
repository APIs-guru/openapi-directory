import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatientAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=line" })
  line?: string;

  @Metadata({ data: "json, name=pincode" })
  pincode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}

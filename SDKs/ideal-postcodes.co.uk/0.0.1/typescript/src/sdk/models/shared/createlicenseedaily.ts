import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLicenseeDaily extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;
}

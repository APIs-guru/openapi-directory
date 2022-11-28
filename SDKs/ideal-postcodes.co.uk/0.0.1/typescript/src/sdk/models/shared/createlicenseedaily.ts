import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLicenseeDaily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AbuseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

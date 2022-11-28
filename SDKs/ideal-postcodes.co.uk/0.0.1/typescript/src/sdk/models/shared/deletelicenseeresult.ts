import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLicenseeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: number;
}

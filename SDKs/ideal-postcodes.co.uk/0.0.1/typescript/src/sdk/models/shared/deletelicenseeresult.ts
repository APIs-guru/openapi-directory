import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLicenseeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: number;
}

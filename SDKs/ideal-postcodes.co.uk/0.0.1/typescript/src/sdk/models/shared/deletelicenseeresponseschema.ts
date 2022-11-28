import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteLicenseeResult } from "./deletelicenseeresult";



export class DeleteLicenseeResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: DeleteLicenseeResult;
}

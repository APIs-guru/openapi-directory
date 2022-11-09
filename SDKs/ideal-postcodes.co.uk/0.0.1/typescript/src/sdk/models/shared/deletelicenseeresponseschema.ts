import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeleteLicenseeResult } from "./deletelicenseeresult";


export class DeleteLicenseeResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: DeleteLicenseeResult;
}

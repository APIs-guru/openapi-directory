import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EditAtom
/** 
 * Edit atom.
**/
export class EditAtom extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=inputs" })
  inputs?: string[];

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}

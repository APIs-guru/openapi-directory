import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditAtom
/** 
 * Edit atom.
**/
export class EditAtom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=inputs" })
  inputs?: string[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}

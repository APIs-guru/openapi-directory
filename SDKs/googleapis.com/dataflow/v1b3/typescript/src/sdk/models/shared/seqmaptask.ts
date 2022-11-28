import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SideInputInfo } from "./sideinputinfo";
import { SeqMapTaskOutputInfo } from "./seqmaptaskoutputinfo";



// SeqMapTask
/** 
 * Describes a particular function to invoke.
**/
export class SeqMapTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: SideInputInfo })
  inputs?: SideInputInfo[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputInfos", elemType: SeqMapTaskOutputInfo })
  outputInfos?: SeqMapTaskOutputInfo[];

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;

  @SpeakeasyMetadata({ data: "json, name=userFn" })
  userFn?: Map<string, any>;
}

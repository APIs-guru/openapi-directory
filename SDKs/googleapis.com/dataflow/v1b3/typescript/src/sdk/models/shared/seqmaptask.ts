import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SideInputInfo } from "./sideinputinfo";
import { SeqMapTaskOutputInfo } from "./seqmaptaskoutputinfo";


// SeqMapTask
/** 
 * Describes a particular function to invoke.
**/
export class SeqMapTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.SideInputInfo })
  inputs?: SideInputInfo[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputInfos", elemType: shared.SeqMapTaskOutputInfo })
  outputInfos?: SeqMapTaskOutputInfo[];

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;

  @Metadata({ data: "json, name=userFn" })
  userFn?: Map<string, any>;
}

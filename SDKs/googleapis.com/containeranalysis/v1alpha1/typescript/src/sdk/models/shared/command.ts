import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Command
/** 
 * Command describes a step performed as part of the build pipeline.
**/
export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=dir" })
  dir?: string;

  @Metadata({ data: "json, name=env" })
  env?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=waitFor" })
  waitFor?: string[];
}

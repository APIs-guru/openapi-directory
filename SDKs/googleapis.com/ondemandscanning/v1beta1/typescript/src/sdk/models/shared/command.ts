import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Command
/** 
 * Command describes a step performed as part of the build pipeline.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=dir" })
  dir?: string;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=waitFor" })
  waitFor?: string[];
}

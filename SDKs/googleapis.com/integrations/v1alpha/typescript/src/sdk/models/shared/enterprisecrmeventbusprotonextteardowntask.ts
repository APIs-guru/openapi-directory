import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoNextTeardownTask
/** 
 * The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).
**/
export class EnterpriseCrmEventbusProtoNextTeardownTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

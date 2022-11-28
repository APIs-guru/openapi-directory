import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoNextTeardownTask
/** 
 * The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).
**/
export class EnterpriseCrmEventbusProtoNextTeardownTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

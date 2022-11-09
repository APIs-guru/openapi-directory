import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PoolOption
/** 
 * Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
**/
export class PoolOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

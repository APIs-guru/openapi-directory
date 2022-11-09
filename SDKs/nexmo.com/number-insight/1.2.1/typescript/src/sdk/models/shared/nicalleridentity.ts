import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NiCallerIdentityCallerTypeEnum {
    Business = "business"
,    Consumer = "consumer"
,    Unknown = "unknown"
}


// NiCallerIdentity
/** 
 * Information about the network `number` is currently connected to.
**/
export class NiCallerIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=caller_name" })
  callerName?: string;

  @Metadata({ data: "json, name=caller_type" })
  callerType?: NiCallerIdentityCallerTypeEnum;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NiCallerIdentityCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}


// NiCallerIdentity
/** 
 * Information about the network `number` is currently connected to.
**/
export class NiCallerIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_type" })
  callerType?: NiCallerIdentityCallerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;
}

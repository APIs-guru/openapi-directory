import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hl7V2NotificationConfig } from "./hl7v2notificationconfig";
import { ParserConfig } from "./parserconfig";



// Hl7V2Store
/** 
 * Represents an HL7v2 store.
**/
export class Hl7V2Store extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfigs", elemType: Hl7V2NotificationConfig })
  notificationConfigs?: Hl7V2NotificationConfig[];

  @SpeakeasyMetadata({ data: "json, name=parserConfig" })
  parserConfig?: ParserConfig;

  @SpeakeasyMetadata({ data: "json, name=rejectDuplicateMessage" })
  rejectDuplicateMessage?: boolean;
}

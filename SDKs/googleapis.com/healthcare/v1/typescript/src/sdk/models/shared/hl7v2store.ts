import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hl7V2NotificationConfig } from "./hl7v2notificationconfig";
import { ParserConfig } from "./parserconfig";


// Hl7V2Store
/** 
 * Represents an HL7v2 store.
**/
export class Hl7V2Store extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationConfigs", elemType: shared.Hl7V2NotificationConfig })
  notificationConfigs?: Hl7V2NotificationConfig[];

  @Metadata({ data: "json, name=parserConfig" })
  parserConfig?: ParserConfig;

  @Metadata({ data: "json, name=rejectDuplicateMessage" })
  rejectDuplicateMessage?: boolean;
}

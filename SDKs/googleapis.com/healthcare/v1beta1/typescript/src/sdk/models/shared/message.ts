import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParsedData } from "./parseddata";
import { PatientId } from "./patientid";
import { SchematizedData } from "./schematizeddata";



// Message
/** 
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=messageType" })
  messageType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parsedData" })
  parsedData?: ParsedData;

  @SpeakeasyMetadata({ data: "json, name=patientIds", elemType: PatientId })
  patientIds?: PatientId[];

  @SpeakeasyMetadata({ data: "json, name=schematizedData" })
  schematizedData?: SchematizedData;

  @SpeakeasyMetadata({ data: "json, name=sendFacility" })
  sendFacility?: string;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;
}


// MessageInput
/** 
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
export class MessageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=messageType" })
  messageType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parsedData" })
  parsedData?: ParsedData;

  @SpeakeasyMetadata({ data: "json, name=patientIds", elemType: PatientId })
  patientIds?: PatientId[];

  @SpeakeasyMetadata({ data: "json, name=schematizedData" })
  schematizedData?: SchematizedData;

  @SpeakeasyMetadata({ data: "json, name=sendFacility" })
  sendFacility?: string;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParsedData } from "./parseddata";
import { PatientId } from "./patientid";
import { SchematizedData } from "./schematizeddata";


// Message
/** 
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=messageType" })
  messageType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parsedData" })
  parsedData?: ParsedData;

  @Metadata({ data: "json, name=patientIds", elemType: shared.PatientId })
  patientIds?: PatientId[];

  @Metadata({ data: "json, name=schematizedData" })
  schematizedData?: SchematizedData;

  @Metadata({ data: "json, name=sendFacility" })
  sendFacility?: string;

  @Metadata({ data: "json, name=sendTime" })
  sendTime?: string;
}

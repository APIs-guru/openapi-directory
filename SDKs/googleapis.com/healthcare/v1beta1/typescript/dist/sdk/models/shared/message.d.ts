import { SpeakeasyBase } from "../../../internal/utils";
import { ParsedData } from "./parseddata";
import { PatientId } from "./patientid";
import { SchematizedData } from "./schematizeddata";
/**
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
export declare class Message extends SpeakeasyBase {
    createTime?: string;
    data?: string;
    labels?: Map<string, string>;
    messageType?: string;
    name?: string;
    parsedData?: ParsedData;
    patientIds?: PatientId[];
    schematizedData?: SchematizedData;
    sendFacility?: string;
    sendTime?: string;
}
/**
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
export declare class MessageInput extends SpeakeasyBase {
    data?: string;
    labels?: Map<string, string>;
    messageType?: string;
    name?: string;
    parsedData?: ParsedData;
    patientIds?: PatientId[];
    schematizedData?: SchematizedData;
    sendFacility?: string;
    sendTime?: string;
}

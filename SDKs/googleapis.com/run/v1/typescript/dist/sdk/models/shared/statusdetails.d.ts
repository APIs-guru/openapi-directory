import { SpeakeasyBase } from "../../../internal/utils";
import { StatusCause } from "./statuscause";
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
**/
export declare class StatusDetails extends SpeakeasyBase {
    causes?: StatusCause[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
}

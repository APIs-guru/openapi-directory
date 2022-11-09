import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatusCause } from "./statuscause";


// StatusDetails
/** 
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
**/
export class StatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=causes", elemType: shared.StatusCause })
  causes?: StatusCause[];

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=retryAfterSeconds" })
  retryAfterSeconds?: number;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}

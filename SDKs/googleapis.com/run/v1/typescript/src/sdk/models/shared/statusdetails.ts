import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusCause } from "./statuscause";



// StatusDetails
/** 
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
**/
export class StatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=causes", elemType: StatusCause })
  causes?: StatusCause[];

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=retryAfterSeconds" })
  retryAfterSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}

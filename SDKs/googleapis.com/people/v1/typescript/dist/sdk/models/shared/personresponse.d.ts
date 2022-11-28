import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
import { Status } from "./status";
/**
 * The response for a single person
**/
export declare class PersonResponse extends SpeakeasyBase {
    httpStatusCode?: number;
    person?: Person;
    requestedResourceName?: string;
    status?: Status;
}

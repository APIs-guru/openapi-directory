import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { Organisation } from "./organisation";
export declare class Sponsor extends SpeakeasyBase {
    member?: Member;
    organisation?: Organisation;
    sortOrder?: number;
}

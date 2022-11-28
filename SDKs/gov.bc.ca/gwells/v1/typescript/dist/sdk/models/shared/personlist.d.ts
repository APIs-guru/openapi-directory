import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationsList } from "./registrationslist";
export declare class PersonList extends SpeakeasyBase {
    contactCell?: string;
    contactEmail?: string;
    contactTel?: string;
    firstName: string;
    personGuid?: string;
    registrations?: RegistrationsList[];
    surname: string;
}

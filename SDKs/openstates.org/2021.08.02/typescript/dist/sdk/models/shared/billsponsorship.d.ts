import { SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";
import { CompactPerson } from "./compactperson";
export declare class BillSponsorship extends SpeakeasyBase {
    classification: string;
    entityType: string;
    name: string;
    organization?: Organization;
    person?: CompactPerson;
    primary: boolean;
}

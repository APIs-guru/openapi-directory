import { SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";
export declare class BillAction extends SpeakeasyBase {
    classification: string[];
    date: string;
    description: string;
    order: number;
    organization: Organization;
}

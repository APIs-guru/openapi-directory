import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account Invoice object
**/
export declare class Invoice extends SpeakeasyBase {
    date?: Date;
    id?: number;
    label?: string;
    subtotal?: number;
    tax?: number;
    total?: number;
}

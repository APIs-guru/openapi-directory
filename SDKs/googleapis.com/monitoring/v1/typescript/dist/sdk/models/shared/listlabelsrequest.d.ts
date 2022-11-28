import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
**/
export declare class ListLabelsRequest extends SpeakeasyBase {
    end?: string;
    match?: string;
    start?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().
**/
export declare class Label extends SpeakeasyBase {
    name?: string;
    value?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeTypeLabelEntry } from "./compositetypelabelentry";
import { Operation } from "./operation";
import { TemplateContents } from "./templatecontents";
export declare enum CompositeTypeStatusEnum {
    UnknownStatus = "UNKNOWN_STATUS",
    Deprecated = "DEPRECATED",
    Experimental = "EXPERIMENTAL",
    Supported = "SUPPORTED"
}
/**
 * Holds the composite type.
**/
export declare class CompositeType extends SpeakeasyBase {
    description?: string;
    id?: string;
    insertTime?: string;
    labels?: CompositeTypeLabelEntry[];
    name?: string;
    operation?: Operation;
    selfLink?: string;
    status?: CompositeTypeStatusEnum;
    templateContents?: TemplateContents;
}

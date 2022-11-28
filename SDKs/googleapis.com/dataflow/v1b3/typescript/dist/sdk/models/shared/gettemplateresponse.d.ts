import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateMetadata } from "./templatemetadata";
import { RuntimeMetadata } from "./runtimemetadata";
import { Status } from "./status";
export declare enum GetTemplateResponseTemplateTypeEnum {
    Unknown = "UNKNOWN",
    Legacy = "LEGACY",
    Flex = "FLEX"
}
/**
 * The response to a GetTemplate request.
**/
export declare class GetTemplateResponse extends SpeakeasyBase {
    metadata?: TemplateMetadata;
    runtimeMetadata?: RuntimeMetadata;
    status?: Status;
    templateType?: GetTemplateResponseTemplateTypeEnum;
}

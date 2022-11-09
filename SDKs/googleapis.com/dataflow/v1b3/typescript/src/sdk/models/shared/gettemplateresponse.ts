import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateMetadata } from "./templatemetadata";
import { RuntimeMetadata } from "./runtimemetadata";
import { Status } from "./status";

export enum GetTemplateResponseTemplateTypeEnum {
    Unknown = "UNKNOWN"
,    Legacy = "LEGACY"
,    Flex = "FLEX"
}


// GetTemplateResponse
/** 
 * The response to a GetTemplate request.
**/
export class GetTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: TemplateMetadata;

  @Metadata({ data: "json, name=runtimeMetadata" })
  runtimeMetadata?: RuntimeMetadata;

  @Metadata({ data: "json, name=status" })
  status?: Status;

  @Metadata({ data: "json, name=templateType" })
  templateType?: GetTemplateResponseTemplateTypeEnum;
}

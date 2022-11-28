import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateMetadata } from "./templatemetadata";
import { RuntimeMetadata } from "./runtimemetadata";
import { Status } from "./status";


export enum GetTemplateResponseTemplateTypeEnum {
    Unknown = "UNKNOWN",
    Legacy = "LEGACY",
    Flex = "FLEX"
}


// GetTemplateResponse
/** 
 * The response to a GetTemplate request.
**/
export class GetTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: TemplateMetadata;

  @SpeakeasyMetadata({ data: "json, name=runtimeMetadata" })
  runtimeMetadata?: RuntimeMetadata;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;

  @SpeakeasyMetadata({ data: "json, name=templateType" })
  templateType?: GetTemplateResponseTemplateTypeEnum;
}

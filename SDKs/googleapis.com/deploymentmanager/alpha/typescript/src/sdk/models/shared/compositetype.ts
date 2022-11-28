import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeTypeLabelEntry } from "./compositetypelabelentry";
import { Operation } from "./operation";
import { TemplateContents } from "./templatecontents";


export enum CompositeTypeStatusEnum {
    UnknownStatus = "UNKNOWN_STATUS",
    Deprecated = "DEPRECATED",
    Experimental = "EXPERIMENTAL",
    Supported = "SUPPORTED"
}


// CompositeType
/** 
 * Holds the composite type.
**/
export class CompositeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: CompositeTypeLabelEntry })
  labels?: CompositeTypeLabelEntry[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CompositeTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=templateContents" })
  templateContents?: TemplateContents;
}

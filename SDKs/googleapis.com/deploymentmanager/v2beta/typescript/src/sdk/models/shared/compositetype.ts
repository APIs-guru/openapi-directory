import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompositeTypeLabelEntry } from "./compositetypelabelentry";
import { Operation } from "./operation";
import { TemplateContents } from "./templatecontents";

export enum CompositeTypeStatusEnum {
    UnknownStatus = "UNKNOWN_STATUS"
,    Deprecated = "DEPRECATED"
,    Experimental = "EXPERIMENTAL"
,    Supported = "SUPPORTED"
}


// CompositeType
/** 
 * Holds the composite type.
**/
export class CompositeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.CompositeTypeLabelEntry })
  labels?: CompositeTypeLabelEntry[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: CompositeTypeStatusEnum;

  @Metadata({ data: "json, name=templateContents" })
  templateContents?: TemplateContents;
}

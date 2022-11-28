import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodesCreateNodeAttributesCategoryEnum {
    Analysis = "analysis",
    Communication = "communication",
    Data = "data",
    Hypothesis = "hypothesis",
    Instrumentation = "instrumentation",
    MethodsAndMeasures = "methods and measures",
    Procedure = "procedure",
    Project = "project",
    Software = "software",
    Other = "other"
}


// NodesCreateNodeAttributesInput
/** 
 * The properties of the node entity.
**/
export class NodesCreateNodeAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: NodesCreateNodeAttributesCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=node_license" })
  nodeLicense?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=template_from" })
  templateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class NodesCreateNodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NodesCreateNodeAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class NodesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesCreateNodeInput;
}


export class NodesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

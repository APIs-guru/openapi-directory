import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesChildrenCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}

export enum NodesChildrenCreateNodeAttributesCategoryEnum {
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


// NodesChildrenCreateNodeAttributesInput
/** 
 * The properties of the node entity.
**/
export class NodesChildrenCreateNodeAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: NodesChildrenCreateNodeAttributesCategoryEnum;

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


export class NodesChildrenCreateNodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NodesChildrenCreateNodeAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class NodesChildrenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesChildrenCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesChildrenCreateNodeInput;
}


export class NodesChildrenCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesForksCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}

export enum NodesForksCreateNodeAttributesCategoryEnum {
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


// NodesForksCreateNodeAttributesInput
/** 
 * The properties of the node entity.
**/
export class NodesForksCreateNodeAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: NodesForksCreateNodeAttributesCategoryEnum;

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


export class NodesForksCreateNodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NodesForksCreateNodeAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class NodesForksCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesForksCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesForksCreateNodeInput;
}


export class NodesForksCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

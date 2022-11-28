import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesChildrenCreatePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum NodesChildrenCreateNodeAttributesCategoryEnum {
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
/**
 * The properties of the node entity.
**/
export declare class NodesChildrenCreateNodeAttributesInput extends SpeakeasyBase {
    category: NodesChildrenCreateNodeAttributesCategoryEnum;
    description?: string;
    nodeLicense?: string;
    public?: boolean;
    tags?: string[];
    templateFrom?: string;
    title: string;
}
export declare class NodesChildrenCreateNodeInput extends SpeakeasyBase {
    attributes: NodesChildrenCreateNodeAttributesInput;
    type: string;
}
export declare class NodesChildrenCreateRequest extends SpeakeasyBase {
    pathParams: NodesChildrenCreatePathParams;
    request: NodesChildrenCreateNodeInput;
}
export declare class NodesChildrenCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

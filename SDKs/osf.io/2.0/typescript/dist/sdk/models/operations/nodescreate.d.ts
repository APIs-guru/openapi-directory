import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodesCreateNodeAttributesCategoryEnum {
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
export declare class NodesCreateNodeAttributesInput extends SpeakeasyBase {
    category: NodesCreateNodeAttributesCategoryEnum;
    description?: string;
    nodeLicense?: string;
    public?: boolean;
    tags?: string[];
    templateFrom?: string;
    title: string;
}
export declare class NodesCreateNodeInput extends SpeakeasyBase {
    attributes: NodesCreateNodeAttributesInput;
    type: string;
}
export declare class NodesCreateRequest extends SpeakeasyBase {
    request: NodesCreateNodeInput;
}
export declare class NodesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

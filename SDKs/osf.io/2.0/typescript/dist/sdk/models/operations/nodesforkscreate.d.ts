import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesForksCreatePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum NodesForksCreateNodeAttributesCategoryEnum {
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
export declare class NodesForksCreateNodeAttributesInput extends SpeakeasyBase {
    category: NodesForksCreateNodeAttributesCategoryEnum;
    description?: string;
    nodeLicense?: string;
    public?: boolean;
    tags?: string[];
    templateFrom?: string;
    title: string;
}
export declare class NodesForksCreateNodeInput extends SpeakeasyBase {
    attributes: NodesForksCreateNodeAttributesInput;
    type: string;
}
export declare class NodesForksCreateRequest extends SpeakeasyBase {
    pathParams: NodesForksCreatePathParams;
    request: NodesForksCreateNodeInput;
}
export declare class NodesForksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

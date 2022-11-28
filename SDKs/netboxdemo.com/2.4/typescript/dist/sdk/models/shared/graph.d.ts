import { SpeakeasyBase } from "../../../internal/utils";
export declare class GraphType extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Graph extends SpeakeasyBase {
    id?: number;
    link?: string;
    name: string;
    source: string;
    type: GraphType;
    weight?: number;
}

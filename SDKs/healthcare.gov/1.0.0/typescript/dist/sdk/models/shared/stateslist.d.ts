import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatesListStates extends SpeakeasyBase {
    categories?: any[][];
    content?: string;
    date?: string;
    excerpt?: string;
    id?: string;
    lang?: string;
    path?: string;
    sort?: number;
    stateurl?: string;
    tags?: string[][];
    title?: string;
    url?: string;
}
export declare class StatesList extends SpeakeasyBase {
    states?: StatesListStates[][];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { Source } from "./source";
export declare class SourceWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: Source[];
}

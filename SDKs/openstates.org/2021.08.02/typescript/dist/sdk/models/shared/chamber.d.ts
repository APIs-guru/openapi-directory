import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
export declare class Chamber extends SpeakeasyBase {
    classification: string;
    districts?: Post[];
    id: string;
    name: string;
}

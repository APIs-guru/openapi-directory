import { SpeakeasyBase } from "../../../internal/utils";
import { Embedded } from "./embedded";
import { Links } from "./links";
export declare class Applications extends SpeakeasyBase {
    embedded: Embedded;
    links: Links;
    count: number;
    pageIndex: number;
    pageSize: number;
}

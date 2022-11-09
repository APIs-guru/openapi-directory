import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";
import { Pagination } from "./pagination";
export declare class Meta extends SpeakeasyBase {
    messages?: Message[];
    pagination?: Pagination;
    status?: number;
}
